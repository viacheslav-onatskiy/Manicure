import { ChangeEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { useDimension } from '../../helpers/useDimension';
import { useSwipe } from '../../helpers/useSwipe';
import Button from '../atoms/Button';
import { ModalCloseButton, ModalMain, ModalWrapper } from './styles';

interface ModalProps {
  isOpen?: boolean;
  modalId: string;
  hasCloseBtn?: boolean;
  onClose: () => void;
  showNext?: (e?: KeyboardEvent | ChangeEvent<HTMLElement>) => void | undefined;
  showPrev?: (e?: KeyboardEvent | ChangeEvent<HTMLElement>) => void | undefined;
  children: ReactNode;
}

const Modal = ({
  isOpen = false,
  modalId,
  hasCloseBtn = true,
  onClose,
  showNext,
  showPrev,
  children
}: ModalProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDivElement>(null);
  const leftButtonRef = useRef<HTMLButtonElement>(null);
  const rightButtonRef = useRef<HTMLButtonElement>(null);
  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe();
  const { isMobile } = useDimension();

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
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
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
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27 || e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleCloseModal]);

  useEffect(() => {
    const handleKeyRight = (e: KeyboardEvent) => {
      if (!showNext) return;
      if (e.keyCode === 39) {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyRight);

    return () => window.removeEventListener('keydown', handleKeyRight);
  }, [showNext]);

  useEffect(() => {
    const handleKeyLeft = (e: KeyboardEvent) => {
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
        <ModalCloseButton
          variant={isMobile ? 'primary' : 'outlined'}
          onClick={handleCloseModal}
        >
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
