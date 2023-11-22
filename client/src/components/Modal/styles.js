import styled from 'styled-components';
import { MyButton } from '../../pages/home/styles';

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
`;

export const ModalMain = styled.div`
  position: fixed;
  background: #f1f1f1;
  color: #3d19d9;
  width: 35rem;
  height: auto;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  position: relative;
  padding: 35px 25px;
`;

export const ModalCloseButton = styled(MyButton)`
  position: fixed;
  right: 10px;
  top: 10px;
  font-size: 15px;
  line-height: 15px;
  padding: 10px;
`;
