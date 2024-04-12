import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  text-align: center;
  margin: 15px 0 0 0;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;
  padding: 10px 15px;
  color: #333333;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);

  .show-hide-button {
    color: ${({ theme }) => theme.colors.primary1};
  }
`;

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewAuthor = styled.div`
  font-weight: 600;
`;

export const ReviewDate = styled.div``;

export const ReviewButtons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 15px;

  button {
    padding: 5px;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const ReviewRating = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
`;

export const ReviewText = styled.pre`
  text-align: start;
  margin: 10px 0 0;
  white-space: pre-wrap;
  word-wrap: break-word;

  &.line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      -webkit-line-clamp: 5;
    }
  }
`;
