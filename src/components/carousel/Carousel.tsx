import { ReactNode, useCallback, useEffect, useState } from 'react';
import { IReview } from '../../redux/actions/review';
import Button from '../atoms/Button';
import {
  CarouselArrow,
  CarouselIndicator,
  CarouselIndicators,
  CarouselSlides,
  CarouselWrapper
} from './styles';

interface CarouselProps {
  items: IReview[];
  children: ReactNode;
}

const Carousel = ({ items, children }: CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
  }, [items.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
  }, [items.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  return (
    <CarouselWrapper>
      <CarouselSlides style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children}
      </CarouselSlides>
      <CarouselArrow className="left" onClick={prevSlide}>
        <Button>⭠</Button>
      </CarouselArrow>
      <CarouselArrow className="right" onClick={nextSlide}>
        <Button>⭢</Button>
      </CarouselArrow>

      <CarouselIndicators>
        {items?.map((_, index) => (
          <CarouselIndicator
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </CarouselIndicators>
    </CarouselWrapper>
  );
};

export default Carousel;
