import styled from 'styled-components';

export const TextareaWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TextareaLabel = styled.label`
  white-space: nowrap;
  cursor: pointer;
`;

export const TextareaStyle = styled.textarea`
  padding: 5px;
  width: 100%;
  border-radius: 5px;
  resize: none;
  rows: 4;
`;
