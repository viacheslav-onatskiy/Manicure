import { RefObject, useEffect, useState } from 'react';

export const useIsVisible = (ref: RefObject<Element>, rootMargin = '-200px'): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};
