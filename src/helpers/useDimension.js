import { useEffect, useState } from 'react';

export const useDimension = () => {
  const [windowDimension, setWindowDimension] = useState(null);

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

  const isTablet = windowDimension <= 1024;
  const isMobile = windowDimension <= 768;

  return {
    isTablet,
    isMobile,
    windowDimension
  };
};
