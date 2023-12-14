import styled, { css } from 'styled-components';
import Button from '../atoms/Button';

const modalButtonStyles = css`
  position: fixed;
  left: 40px;
  top: 100px;
  color: ${({ theme }) => theme.colors.primary2};
  outline-color: ${({ theme }) => theme.colors.primary2};
  font-size: 55px;
  line-height: 15px;
  padding: 30px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 101;

  &:hover {
    color: ${({ theme }) => theme.colors.primary1};
    outline-color: ${({ theme }) => theme.colors.primary1};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.primary2};
    outline-color: ${({ theme }) => theme.colors.primary2};
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    outline-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000099;
  backdrop-filter: blur(1px);
  display: ${({ isShowModal }) => (isShowModal ? 'block' : 'none')};
  z-index: 20;

  &#lightbox-modal {
    & .modal-main-content {
      width: fit-content;
      background: transparent;
      padding: 0;
    }
  }

  .modal__prev-button {
    ${modalButtonStyles}
  }

  .modal__next-button {
    ${modalButtonStyles}
    left: unset;
    right: 40px;
  }
`;

export const ModalMain = styled.div`
  position: fixed;
  background: #f1f1f1;
  color: #3d19d9;
  width: 50vw;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  position: relative;
  padding: 35px 25px;
  max-height: 80vh;
`;

export const ModalCloseButton = styled(Button)`
  position: fixed;
  right: 15px;
  top: 15px;
  font-size: 15px;
  line-height: 15px;
  padding: 10px;
`;
