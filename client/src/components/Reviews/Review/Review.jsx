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

const Review = ({ review, updateReviewFn, deleteReview, userId }) => {
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
                variant="outlined"
                onClick={() => updateReviewFn(review._id)}
                title="Update review"
              >
                Update
              </Button>
              <Button
                size="small"
                variant="primary"
                onClick={() => deleteReview(review._id)}
                title="Remove review"
              >
                Remove
              </Button>
            </>
          )}
        </ReviewButtons>
      </ReviewRating>

      <ReviewText>{review.description}</ReviewText>
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
