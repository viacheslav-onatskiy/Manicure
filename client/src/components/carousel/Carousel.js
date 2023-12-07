import React, { useCallback, useEffect, useState } from 'react';
import { useReview } from '../../redux/hooks';
import {
  CarouselArrow,
  CarouselIndicator,
  CarouselIndicators,
  CarouselSlide,
  CarouselSlideWrapper,
  CarouselSlides,
  CarouselWrapper,
  SlideDescription
} from './styles';
import { renderIcon } from '../../images/svgIcons';
import StarRating from '../StarRating';
import { Heading4, Heading5, MyButton } from '../common/styles';

const Carousel = () => {
  const { reviews, getReviews } = useReview();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === reviews.length - 1 ? 0 : prevSlide + 1
    );
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, nextSlide]);

  useEffect(() => {
    if (!reviews.length) {
      getReviews();
    }
  }, [getReviews, reviews.length]);

  return (
    <CarouselWrapper>
      <CarouselSlides style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {reviews.map((review, index) => (
          <CarouselSlideWrapper key={index}>
            <CarouselSlide>
              <div className="quote-icon">{renderIcon('quote')}</div>
              <SlideDescription>
                description: {review.description.toString()}
              </SlideDescription>
              <StarRating rating={review.rating} isEditable={false} />
              <Heading4 className="slide__user">{review.name}</Heading4>
              <Heading5>Client</Heading5>
            </CarouselSlide>
          </CarouselSlideWrapper>
        ))}
      </CarouselSlides>
      <CarouselArrow className="left" onClick={prevSlide}>
        <MyButton>⭠</MyButton>
      </CarouselArrow>
      <CarouselArrow className="right" onClick={nextSlide}>
        <MyButton>⭢</MyButton>
      </CarouselArrow>

      <CarouselIndicators>
        {reviews.map((_, index) => (
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
