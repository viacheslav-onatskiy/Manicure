import { useCallback, useEffect, useRef, useState } from 'react';
import { ModalCloseButton, ModalMain, ModalWrapper } from './styles';
import { useSwipe } from '../../helpers/useSwipe';
import Button from '../atoms/Button';

const Modal = ({
  isOpen = false,
  modalId,
  hasCloseBtn = true,
  onClose,
  showPrev = null,
  showNext = null,
  children
}) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();

  const handleCloseModal = useCallback(() => {
    if (onClose) {
      onClose();
    }
    setModalOpen(false);
  }, [onClose]);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }
  }, [isModalOpen]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        if (leftButtonRef.current === e.target || rightButtonRef.current === e.target) {
          return;
        }
        onClose();
      }
    };
    document.addEventListener('click', checkIfClickedOutside, true);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside, true);
    };
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 27 || e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseModal]);

  useEffect(() => {
    const handleKeyRight = (e) => {
      if (!showNext) return;
      if (e.keyCode === 39) {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyRight);

    return () => window.removeEventListener('keydown', handleKeyRight);
  }, [showNext]);

  useEffect(() => {
    const handleKeyLeft = (e) => {
      if (!showPrev) return;
      if (e.keyCode === 37) {
        showPrev(e);
      }
    };

    window.addEventListener('keydown', handleKeyLeft);

    return () => window.removeEventListener('keydown', handleKeyLeft);
  }, [showPrev]);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <ModalWrapper
      id={modalId}
      $isShowModal={isModalOpen}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {showPrev && (
        <Button
          className="modal__prev-button"
          variant="outlined"
          onClick={showPrev}
          ref={leftButtonRef}
        >
          ⭠
        </Button>
      )}
      {showNext && (
        <Button
          className="modal__next-button"
          variant="outlined"
          onClick={showNext}
          ref={rightButtonRef}
        >
          ⭢
        </Button>
      )}
      {hasCloseBtn && (
        <ModalCloseButton variant="outlined" onClick={handleCloseModal}>
          x
        </ModalCloseButton>
      )}
      <ModalMain className="modal-main-content" ref={modalRef}>
        {children}
      </ModalMain>
    </ModalWrapper>
  );
};

export default Modal;
