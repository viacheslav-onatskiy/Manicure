import { StyledAlert, StyledForm } from './styles';
import StarRating from '../../StarRating';
import Textarea from '../../Textarea';
import Button from '../../atoms/Button';

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
        className="modal__rating"
        rating={rating}
        onSaveRating={(ratingValue) => setFormData({ ...formData, rating: ratingValue })}
      />

      <Button className="modal__button" size="large" variant="outlined" type="submit">
        {modalType === 'Add' ? 'Leave review' : 'Update review'}
      </Button>
    </StyledForm>
  );
};

export default ReviewForm;
