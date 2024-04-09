import { motion } from 'framer-motion';
import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReviewForm from '../../components/Form/ReviewForm/ReviewForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Modal from '../../components/Modal/index.js';
import Review from '../../components/Reviews/Review/Review.jsx';
import Button from '../../components/atoms/Button/index.js';
import Pagination from '../../components/atoms/Pagination';
import { Heading2, PageHeading } from '../../components/common/styles.js';
import { useDimension } from '../../helpers/useDimension.js';
import { User } from '../../redux/actions/auth.js';
import { useAuth, useReview } from '../../redux/hooks';
import { IReview } from '../../redux/reducers/paginationReducer.js';
import { ReviewsButtonWrapper, ReviewsContentWrapper, ReviewsWrapper } from './styles';

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const pageSize = searchParams.get('pageSize') || 10;

  const {
    review,
    reviews,
    totalItems,
    addReview,
    getReviews,
    updateReview,
    deleteReview,
    loading
  } = useReview();
  const { user, isAuthenticated, token } = useAuth();
  const { isTablet } = useDimension();

  const [modal, setModal] = useState({
    isOpen: false,
    type: 'Add',
    id: ''
  });

  const [formData, setFormData] = useState({
    description: !loading && modal.type === 'Update' ? (review as IReview).name : '',
    rating: (review as IReview)?.rating || 4,
    isDescriptionInvalid: false,
    reviewId: ''
  });

  const leaveReview = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!token || !isAuthenticated) {
      toast.warning(t('toast.loginToLeaveReview'));
      setFormData({ ...formData, isDescriptionInvalid: false });
      clearModalData();
      closeModal();

      return;
    }

    if (formData.description.length < 4) {
      setFormData({ ...formData, isDescriptionInvalid: true });
      return;
    }

    const reviewData = {
      description: formData.description.trim(),
      rating: formData.rating
    };

    if (modal.type === 'Add') {
      addReview(reviewData);
    } else if (modal.type === 'Update') {
      updateReview(reviewData, formData.reviewId);
    }

    setFormData({ ...formData, isDescriptionInvalid: false });
    clearModalData();
    closeModal();
  };

  const clearModalData = () => {
    setFormData({ ...formData, description: '', rating: 4, isDescriptionInvalid: false });
  };

  const openModal = (type = 'Add', id = 'reviews-modal') => {
    if (!isAuthenticated) {
      toast.warning(t('modals.logInToLeaveReview'));
      return;
    }
    setModal({ isOpen: true, type: type, id });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    clearModalData();
  };

  const updateReviewFn = (reviewId: string) => {
    const review = (reviews as IReview[]).filter(
      (review: IReview) => review._id === reviewId
    );

    setFormData({
      description: review[0].description,
      rating: review[0].rating,
      isDescriptionInvalid: false,
      reviewId: review[0]._id
    });

    openModal('Update', 'reviews-modal');
  };

  useEffect(() => {
    if (!reviews?.length) {
      getReviews(+currentPage, +pageSize);
    }
  }, [currentPage, getReviews, pageSize, reviews?.length]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeading>{t('pages.reviews')}</PageHeading>

      <ReviewsWrapper>
        <ReviewsContentWrapper className={isTablet ? 'container' : ''}>
          <ReviewsButtonWrapper>
            <Button
              size="large"
              variant="primary"
              formType="rounded2"
              onClick={() => openModal()}
            >
              {t('reviews.leaveReview')}
            </Button>
          </ReviewsButtonWrapper>

          <motion.div
            whileInView={{ y: [100, 0], opacity: [0.35, 1] }}
            transition={{ duration: 0.5 }}
            className="container"
          >
            {reviews && reviews.length === 0 && !loading ? (
              <Heading2>{t('reviews.noReviews')}</Heading2>
            ) : (
              <>
                {(reviews as IReview[]).map((review: IReview) => (
                  <Review
                    key={review._id}
                    review={review}
                    updateReviewFn={updateReviewFn}
                    deleteReview={deleteReview}
                    userId={(user as User)?._id}
                  />
                ))}

                <Pagination
                  // items={reviews}
                  totalItems={totalItems || 0}
                  getItems={getReviews}
                />
              </>
            )}
          </motion.div>
        </ReviewsContentWrapper>
      </ReviewsWrapper>

      {modal.isOpen && (
        <Modal isOpen={modal.isOpen} onClose={closeModal} modalId={modal.id}>
          <ReviewForm
            modalType={modal.type}
            formData={formData}
            setFormData={setFormData}
            leaveReview={leaveReview}
          />
        </Modal>
      )}
    </>
  );
};

export default Reviews;
