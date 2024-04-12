import { useState, useEffect } from 'react';
import { renderIcon } from '../../../images/svgIcons';
import { ScrollToTopButtonElement } from './styles';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 300;

    if (scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollToTopButtonElement
      className={`${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      {renderIcon('scrollToTop')}
    </ScrollToTopButtonElement>
  );
};

export default ScrollToTopButton;
