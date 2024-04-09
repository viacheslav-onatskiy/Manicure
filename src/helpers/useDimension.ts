import { useEffect, useState } from 'react';

interface Dimension {
  isTablet: boolean;
  isMobile: boolean;
  windowDimension: number | null;
}

export const useDimension = (): Dimension => {
  const [windowDimension, setWindowDimension] = useState<number | null>(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isTablet = windowDimension !== null ? windowDimension <= 1024 : false;
  const isMobile = windowDimension !== null ? windowDimension <= 768 : false;

  return {
    isTablet,
    isMobile,
    windowDimension
  };
};
