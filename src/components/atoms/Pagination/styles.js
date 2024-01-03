import styled from 'styled-components';
import Button from '../Button';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  gap: 10px;
`;

export const PaginationButton = styled(Button)`
  &.active {
    font-weight: 700;
    background-color: ${({ theme }) => theme.colors.primary2};
  }

  &.disabled {
    pointer-events: none;
  }
`;

export const PaginationWrapper11 = styled.div``;
