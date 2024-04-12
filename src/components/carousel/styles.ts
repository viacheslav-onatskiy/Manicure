import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  overflow: hidden;
  margin: 30px auto 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    width: 90%;
  }
`;

export const CarouselSlides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselArrow = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary4};
  cursor: pointer;
  outline: none;

  &.left {
    left: 10px;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      left: -20px;
    }
  }

  &.right {
    right: 10px;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      right: -20px;
    }
  }

  &.left,
  &.right {
    button {
      font-size: 50px;
    }
  }
`;

export const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
`;

export const CarouselIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary3};
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #333;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.colors.grey};
  }

  &:active,
  &:focus {
    transform: scale(1.08);
    background-color: ${({ theme }) => theme.colors.primary1};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.primary5};
    transform: scale(1.15);
  }
`;
