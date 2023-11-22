import { useCallback, useEffect, useRef, useState } from 'react';
import { ModalCloseButton, ModalMain, ModalWrapper } from './styles';

const Modal = ({ isOpen = false, modalId, hasCloseBtn = true, onClose, children }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const modalRef = useRef(null);

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
        onClose();
      }
    };
    document.addEventListener('click', checkIfClickedOutside, true);

    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
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
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <ModalWrapper id={modalId} isShowModal={isModalOpen}>
      <ModalMain ref={modalRef}>
        {hasCloseBtn && (
          <ModalCloseButton
            className="modal-close-btn"
            bg="black"
            onClick={handleCloseModal}
          >
            x
          </ModalCloseButton>
        )}
        {children}
      </ModalMain>
    </ModalWrapper>
  );
};

export default Modal;
