import { StyledAlert, StyledForm } from './styles';
import StarRating from '../../StarRating';
import Textarea from '../../Textarea';
import { MyButton } from '../../common/styles';

const ReviewForm = ({ formData, modalType = 'Add', setFormData, leaveReview }) => {
  const { description, rating, isDescriptionInvalid } = formData;

  const handleDescription = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <StyledForm onSubmit={leaveReview}>
      <Textarea
        value={description}
        onChange={handleDescription}
        rowsNumber="4"
        placeholder="Description"
      />
      {isDescriptionInvalid && <StyledAlert>Please fill description.</StyledAlert>}

      <StarRating
        rating={rating}
        onSaveRating={(ratingValue) => setFormData({ ...formData, rating: ratingValue })}
      />

      <MyButton type="submit" disabled={!description}>
        {modalType === 'Add' ? 'Leave review' : 'Update review'}
      </MyButton>
    </StyledForm>
  );
};

export default ReviewForm;
