import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  text-align: center;
  margin: 15px 0 0 0;
  border: 1px solid ${({ theme }) => theme.colors.primary1};
  border-radius: 8px;
  padding: 10px 15px;
  color: #333333;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
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
`;

export const ReviewRating = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 0 0;
`;

export const ReviewText = styled.p`
  text-align: start;
  margin: 10px 0 0;
`;
