import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  text-align: center;
  margin: 15px 0 0 0;
  background: #f3f3f3;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 10px 15px;
  color: #333333;
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
