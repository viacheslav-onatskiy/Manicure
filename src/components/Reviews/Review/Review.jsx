import formatDate from '../../../helpers/formatDate';
import StarRating from '../../StarRating';
import PropTypes from 'prop-types';
import {
  ReviewAuthor,
  ReviewButtons,
  ReviewDate,
  ReviewHeader,
  ReviewRating,
  ReviewText,
  ReviewWrapper
} from './styles';
import Button from '../../atoms/Button';
import { useDimension } from '../../../helpers/useDimension';
import { renderIcon } from '../../../images/svgIcons';
import { useEffect, useRef, useState } from 'react';

const Review = ({ review, updateReviewFn, deleteReview, userId }) => {
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
                title="Update review"
              >
                {isTablet ? renderIcon('update') : 'Update'}
              </Button>
              <Button
                size="small"
                variant={isTablet ? '' : 'primary'}
                onClick={() => deleteReview(review._id)}
                title="Remove review"
              >
                {isTablet ? renderIcon('remove') : 'Remove'}
              </Button>
            </>
          )}
        </ReviewButtons>
      </ReviewRating>
      <ReviewText className={!!isTextHidden ? 'line-clamp' : ''} ref={elementRef}>
        {review.description}
      </ReviewText>
      {isTextHidden && (
        <Button className="show-hide-button" onClick={() => showFullText()}>
          Show more
        </Button>
      )}
      {isHideButtonAvailable && (
        <Button className="show-hide-button" onClick={() => hideFullText()}>
          Hide
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
