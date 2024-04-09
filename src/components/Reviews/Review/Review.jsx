import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import formatDate from '../../../helpers/formatDate';
import { useDimension } from '../../../helpers/useDimension';
import { renderIcon } from '../../../images/svgIcons';
import StarRating from '../../StarRating';
import Button from '../../atoms/Button';
import {
  ReviewAuthor,
  ReviewButtons,
  ReviewDate,
  ReviewHeader,
  ReviewRating,
  ReviewText,
  ReviewWrapper
} from './styles';

const Review = ({ review, updateReviewFn, deleteReview, userId }) => {
  const { t } = useTranslation();
  const [numberOfLines, setNumberOfLines] = useState(0);
  const [isTextHidden, setIsTextHidden] = useState(false);
  const [isHideButtonAvailable, setIsHideButtonAvailable] = useState(false);
  const { isTablet } = useDimension();
  const elementRef = useRef(null);

  const showFullText = () => {
    setIsTextHidden(false);
    setIsHideButtonAvailable(true);
  };

  const hideFullText = () => {
    setIsTextHidden(true);
    setIsHideButtonAvailable(false);
  };

  useEffect(() => {
    if (numberOfLines > 3) {
      setIsTextHidden(true);
    }
  }, [numberOfLines]);

  useEffect(() => {
    const element = elementRef.current;
    const height = element.clientHeight;
    const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);

    setNumberOfLines(Math.floor(height / lineHeight));
  }, []);

  return (
    <ReviewWrapper>
      <ReviewHeader>
        <ReviewAuthor>{review?.name}</ReviewAuthor>
        <ReviewDate>{formatDate(new Date(`${review.date}`))}</ReviewDate>
      </ReviewHeader>
      <ReviewRating>
        <StarRating rating={review.rating} isEditable={false} />
        <ReviewButtons>
          {review.user === userId && (
            <>
              <Button
                size="small"
                variant={isTablet ? '' : 'outlined'}
                onClick={() => updateReviewFn(review._id)}
                title={t('reviews.updateReview')}
              >
                {isTablet ? renderIcon('update') : t('common.update')}
              </Button>
              <Button
                size="small"
                variant={isTablet ? '' : 'primary'}
                onClick={() => deleteReview(review._id)}
                title={t('reviews.removeReview')}
              >
                {isTablet ? renderIcon('remove') : t('common.remove')}
              </Button>
            </>
          )}
        </ReviewButtons>
      </ReviewRating>
      <ReviewText className={isTextHidden ? 'line-clamp' : ''} ref={elementRef}>
        {review.description}
      </ReviewText>
      {isTextHidden && (
        <Button className="show-hide-button" onClick={() => showFullText()}>
          {t('common.showMore')}
        </Button>
      )}
      {isHideButtonAvailable && (
        <Button className="show-hide-button" onClick={() => hideFullText()}>
          {t('common.hide')}
        </Button>
      )}
    </ReviewWrapper>
  );
};

export default Review;

Review.propTypes = {
  review: PropTypes.object,
  updateReviewFn: PropTypes.func,
  deleteReview: PropTypes.func,
  userId: PropTypes.string
};
