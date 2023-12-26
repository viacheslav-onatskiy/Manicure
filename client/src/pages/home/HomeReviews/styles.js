import styled from 'styled-components';

export const HomeReviewsSlideWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const HomeReviewsSlide = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  padding: 10px;

  background: white;
  position: relative;
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    max-width: 100%;
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    width: 100px;
    height: 150px;
    background: lightgrey;
    border-radius: 50px/80px;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      transform: translate(-70%, -50%);
    }
  }

  &:after {
    right: 0;
    left: initial;
    transform: translate(50%, -50%);

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      transform: translate(70%, -50%);
    }
  }

  & .quote-icon {
    svg {
      fill: var(--darker);
      stroke: var(--darker);
    }
  }

  .slide__user {
    margin-top: 20px;
    color: var(--darker);
  }

  .star__rating {
    margin: 20px 0 0 0;
  }
`;

export const HomeReviewsSlideDescription = styled.div`
  word-break: break-word;
  text-align: center;
  margin-top: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  -webkit-box-orient: vertical;
  max-width: 60%;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    -webkit-line-clamp: 6;
    line-clamp: 6;
    max-width: 70%;
  }
`;
