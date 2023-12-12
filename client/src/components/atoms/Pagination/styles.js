import styled from 'styled-components';
import { MyButton } from '../../common/styles';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 10px;
`;

export const PaginationButton = styled(MyButton)`
  font-size: 16px;
  color: var(--grey);
  border: 1px solid var(--darker);
  box-shadow: ${({ $shadow }) => $shadow || 'none'};
  padding: 5px 15px;

  &:hover {
    font-weight: 600;
    color: var(--dark);
  }

  &.active {
    font-weight: 700;
    background-color: var(--darker);
  }

  &.disabled {
    pointer-events: none;
  }
`;

export const PaginationWrapper11 = styled.div``;
