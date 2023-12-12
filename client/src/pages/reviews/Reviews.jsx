import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from '../../components/Modal/index.js';
import { MyButton, PageHeading } from '../../components/common/styles.js';
import { ReviewsButtonWrapper, ReviewsContentWrapper, ReviewsWrapper } from './styles.js';
import ReviewForm from '../../components/Form/ReviewForm/ReviewForm.jsx';
import { useAuth, usePagination, useReview } from '../../redux/hooks.js';
import Review from '../../components/Reviews/Review/Review.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Pagination from '../../components/atoms/Pagination/Pagination.js';

const Reviews = () => {
  const { review, reviews, addReview, getReviews, updateReview, deleteReview, loading } =
    useReview();
  const { user, isAuthenticated, token } = useAuth();
  const {
    activePage,
    pageSize,
    pageOfItems,
    setPageItems,
    setPage,
    pageReset,
    setPageReset
  } = usePagination();

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

  // Fetch All Reviews
  useEffect(() => {
    if (!reviews.length) {
      getReviews();
    }
  }, [getReviews, reviews.length]);

  return (
    <>
      <PageHeading>Reviews</PageHeading>

      <ReviewsWrapper>
        <ReviewsContentWrapper>
          <ReviewsButtonWrapper>
            <MyButton bg="#fd4d99" $rounded onClick={() => openModal()}>
              Leave review
            </MyButton>
          </ReviewsButtonWrapper>

          {loading && <Loader />}

          {reviews && reviews.length === 0 && !loading ? (
            <h2>You don't have any reviews. Click the button to add a review!</h2>
          ) : (
            <>
              {pageOfItems.map((review) => (
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
                onChangePage={setPageItems}
                setActivePage={setPage}
                pageSize={pageSize}
                activePage={activePage}
                paginationReset={pageReset}
                setPaginationReset={setPageReset}
              />
            </>
          )}
        </ReviewsContentWrapper>
      </ReviewsWrapper>

      {modal.isOpen && (
        <Modal isOpen={modal.isOpen} onClose={closeModal} modalId={modal.id}>
          <div>
            <ReviewForm
              modalType={modal.type}
              formData={formData}
              setFormData={setFormData}
              leaveReview={leaveReview}
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Reviews;
