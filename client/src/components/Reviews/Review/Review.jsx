import formatDate from '../../../helpers/formatDate';
import { MyButton } from '../../common/styles';
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
              <MyButton
                color="#333333"
                className="small"
                onClick={() => updateReviewFn(review._id)}
                title="Update review"
              >
                Update
              </MyButton>
              <MyButton
                color="#333333"
                className="small"
                onClick={() => deleteReview(review._id)}
                title="Remove review"
              >
                X
              </MyButton>
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
