import { StyledAlert, StyledForm } from './styles';
import StarRating from '../../StarRating';
import Textarea from '../../Textarea';
import Button from '../../atoms/Button';
import { useDimension } from '../../../helpers/useDimension';
import { toast } from 'react-toastify';

const ReviewForm = ({ formData, modalType = 'Add', setFormData, leaveReview }) => {
  const { isTablet } = useDimension();
  const { description, rating, isDescriptionInvalid } = formData;
  const toastId = 'custom-id-toastify';

  const handleDescription = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 400) {
      toast('Max length is 400 symbols', { toastId });
      return;
    }

    setFormData({ ...formData, description: inputValue });
  };

  return (
    <StyledForm onSubmit={leaveReview}>
      <Textarea
        value={description}
        onChange={handleDescription}
        rowsNumber={isTablet ? '7' : '5'}
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
