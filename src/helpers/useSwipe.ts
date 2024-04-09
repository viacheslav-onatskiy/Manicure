import { TouchEvent, useCallback, useState } from 'react';

interface SwipeDirection {
  isLeftSwipe: boolean;
  isRightSwipe: boolean;
}

interface SwipeHandlers {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: (e: TouchEvent, showNext?: () => void, showPrev?: () => void) => void;
}

export const useSwipe = (): SwipeHandlers => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const MIN_SWIPE_DISTANCE = 75;

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX),
    []
  );

  const onTouchEnd = useCallback(
    (e: React.TouchEvent<any>, showNext?: Function, showPrev?: Function) => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const swipeDirection: SwipeDirection = { isLeftSwipe: false, isRightSwipe: false };

      if (distance > MIN_SWIPE_DISTANCE) {
        swipeDirection.isRightSwipe = true;
      } else if (distance < -MIN_SWIPE_DISTANCE) {
        swipeDirection.isLeftSwipe = true;
      }

      if (swipeDirection.isRightSwipe && typeof showNext === 'function') {
        showNext(e);
      }

      if (swipeDirection.isLeftSwipe && typeof showPrev === 'function') {
        showPrev(e);
      }

      setTouchStart(null);
      setTouchEnd(null);
    },
    [touchStart, touchEnd, MIN_SWIPE_DISTANCE]
  );

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
