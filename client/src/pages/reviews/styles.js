import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  text-align: center;
  background: #f3f3f3;
  padding: 30px 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    padding: 10px 0;
  }
`;

export const ReviewsContentWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

export const ReviewsButtonWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    padding: 10px 0;
  }
`;
