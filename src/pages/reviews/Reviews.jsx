import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import ReviewForm from '../../components/Form/ReviewForm/ReviewForm.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Modal from '../../components/Modal/index.js';
import Review from '../../components/Reviews/Review/Review.jsx';
import Button from '../../components/atoms/Button';
import Pagination from '../../components/atoms/Pagination/Pagination.js';
import { Heading2, PageHeading } from '../../components/common/styles.js';
import { useDimension } from '../../helpers/useDimension.js';
import { useAuth, useReview } from '../../redux/hooks.js';
import { ReviewsButtonWrapper, ReviewsContentWrapper, ReviewsWrapper } from './styles.js';

const Reviews = () => {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || 1;
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
    description: !loading && modal.type === 'Update' ? review.name : '',
    rating: review?.rating || 4,
    isDescriptionInvalid: false,
    reviewId: ''
  });

  const leaveReview = (e) => {
    e.preventDefault();

    if (!token || !isAuthenticated) {
      toast.warning('Please log in to leave a review');
      setFormData({ isDescriptionInvalid: false });
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

    setFormData({ isDescriptionInvalid: false });
    clearModalData();
    closeModal();
  };

  const clearModalData = () => {
    setFormData({ description: '', rating: 4, isDescriptionInvalid: false });
  };

  const openModal = (type = 'Add', id = 'reviews-modal') => {
    if (!isAuthenticated) {
      toast.warning('Please log in to leave review');
      return;
    }
    setModal({ isOpen: true, type: type, id });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
    clearModalData();
  };

  const updateReviewFn = (reviewId) => {
    const review = reviews.filter((review) => review._id === reviewId);

    setFormData({
      description: review[0].description,
      rating: review[0].rating,
      isDescriptionInvalid: false,
      reviewId: review[0]._id
    });

    openModal('Update', 'reviews-modal');
  };

  useEffect(() => {
    if (!reviews.length) {
      getReviews(currentPage, pageSize);
    }
  }, [currentPage, getReviews, pageSize, reviews.length]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <PageHeading>Reviews</PageHeading>

      <ReviewsWrapper>
        <ReviewsContentWrapper className={isTablet ? 'container' : ''}>
          <ReviewsButtonWrapper>
            <Button
              size="large"
              variant="primary"
              formType="rounded2"
              onClick={() => openModal()}
            >
              Leave review
            </Button>
          </ReviewsButtonWrapper>

          {reviews && reviews.length === 0 && !loading ? (
            <Heading2>
              You don't have any reviews. Click the button to add a review!
            </Heading2>
          ) : (
            <>
              {reviews.map((review) => (
                <Review
                  key={review._id}
                  review={review}
                  updateReviewFn={updateReviewFn}
                  deleteReview={deleteReview}
                  userId={user?._id}
                />
              ))}

              <Pagination
                id={'reviews-pagination'}
                items={reviews}
                totalItems={totalItems}
                getItems={getReviews}
              />
            </>
          )}
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
