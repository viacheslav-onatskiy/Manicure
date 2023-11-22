import { StyledAlert, StyledButton, StyledForm, StyledTextarea } from './styles';
import StarRating from '../../StarRating';

const ReviewForm = ({ formData, modalType = 'Add', setFormData, leaveReview }) => {
  const { description, rating, isDescriptionInvalid } = formData;

  const handleDescription = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  return (
    <StyledForm onSubmit={leaveReview}>
      <StyledTextarea
        rows="4"
        value={description}
        placeholder="Description"
        onChange={handleDescription}
      />
      {isDescriptionInvalid && <StyledAlert>Please fill description.</StyledAlert>}

      <StarRating
        rating={rating}
        onSaveRating={(ratingValue) => setFormData({ ...formData, rating: ratingValue })}
      />
      <StyledButton type="submit" disabled={!description}>
        {modalType === 'Add' ? 'Leave review' : 'Update review'}
      </StyledButton>
    </StyledForm>
  );
};

export default ReviewForm;
