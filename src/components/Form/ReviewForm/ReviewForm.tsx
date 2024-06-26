import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useDimension } from '../../../helpers/useDimension';
import StarRating from '../../StarRating';
import Textarea from '../../Textarea';
import Button from '../../atoms/Button';
import { StyledAlert, StyledForm } from './styles';

interface FormData {
  description: string;
  rating: number;
  isDescriptionInvalid: boolean;
  reviewId: string;
}

interface ReviewFormProps {
  formData: FormData;
  modalType?: 'Add' | 'Update';
  setFormData: (formData: FormData) => void;
  leaveReview: (event: React.FormEvent<HTMLFormElement>) => void;
}

const ReviewForm = ({
  formData,
  modalType = 'Add',
  setFormData,
  leaveReview
}: ReviewFormProps) => {
  const { t } = useTranslation();
  const { isTablet } = useDimension();
  const { description, rating, isDescriptionInvalid } = formData;
  const toastId = 'custom-id-toastify';

  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length >= 400) {
      toast(t('common.maxLength', { count: 400 }), { toastId });
      return;
    }

    setFormData({ ...formData, description: inputValue });
  };

  return (
    <StyledForm onSubmit={leaveReview}>
      <Textarea
        id="ReviewForm-textarea"
        value={description}
        onChange={handleDescription}
        rowsNumber={isTablet ? 7 : 5}
        placeholder={t('modals.description')}
      />
      {isDescriptionInvalid && <StyledAlert>{t('modals.fillDescription')}</StyledAlert>}

      <StarRating
        className="modal__rating"
        rating={rating}
        onSaveRating={(ratingValue) => setFormData({ ...formData, rating: ratingValue })}
      />

      <Button className="modal__button" size="large" variant="outlined" type="submit">
        {modalType === 'Add' ? t('reviews.leaveReview') : t('reviews.updateReview')}
      </Button>
    </StyledForm>
  );
};

export default ReviewForm;
