import formatDate from '../../../helpers/formatDate';
import { MyButton } from '../../../pages/home/styles';
import StarIcon from '../../StarRating/StarIcon';
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
        {Array(review.rating)
          .fill()
          .map((_, idx) => (
            <StarIcon key={idx} fill="#fd4d99" />
          ))}
        {Array(Number(5 - review.rating))
          .fill()
          .map((_, idx) => (
            <StarIcon key={idx} />
          ))}
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
