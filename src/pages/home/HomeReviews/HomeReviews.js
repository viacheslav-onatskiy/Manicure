import { useTranslation } from 'react-i18next';
import StarRating from '../../../components/StarRating';
import Carousel from '../../../components/carousel';
import { Heading4, Heading5 } from '../../../components/common/styles';
import { renderIcon } from '../../../images/svgIcons';
import { useReview } from '../../../redux/hooks';
import {
  HomeReviewsSlide,
  HomeReviewsSlideDescription,
  HomeReviewsSlideWrapper
} from './styles';

const HomeReviews = () => {
  const { t } = useTranslation();
  const { reviews, getReviews } = useReview();

  const firstTenReviews = reviews.slice(0, 10);

  return (
    <Carousel items={firstTenReviews} getItems={getReviews}>
      {firstTenReviews?.length &&
        firstTenReviews.map((review, index) => (
          <HomeReviewsSlideWrapper key={index}>
            <HomeReviewsSlide>
              <div className="quote-icon">{renderIcon('quote')}</div>
              <HomeReviewsSlideDescription>
                {review.description.toString()}
              </HomeReviewsSlideDescription>
              <StarRating
                rating={review.rating}
                isEditable={false}
                className="star__rating"
              />
              <Heading4 className="slide__user">{review.name}</Heading4>
              <Heading5>{t('home.reviews.client')}</Heading5>
            </HomeReviewsSlide>
          </HomeReviewsSlideWrapper>
        ))}
    </Carousel>
  );
};

export default HomeReviews;
