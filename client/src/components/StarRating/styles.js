import styled from 'styled-components';

export const StarRatingWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: #a1a1a8;
  margin: 20px 0 0 0;
`;

export const StarIconSvg = styled.svg`
  width: 30px;
  height: 30px;
`;

export const RatingIconWrapper = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const StarRatingButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  &.on {
    color: #000;
  }
  &.off {
    color: #ccc;
  }
`;
