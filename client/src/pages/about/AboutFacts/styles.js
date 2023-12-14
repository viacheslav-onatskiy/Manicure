import styled from 'styled-components';
import { Heading2, Heading5 } from '../../../components/common/styles.js';

export const AboutFactsWrapper = styled.div``;

export const AboutFactsList = styled.div`
  display: flex;
  gap: 15px;
`;

export const AboutFactsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  padding: 15px;
`;

export const AboutFactsItemImage = styled.div``;

export const AboutFactsItemImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary3};
  border-radius: 50%;
  position: relative;
`;

export const AboutFactsItemImageIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const AboutFactsItemHeading = styled(Heading5)`
  margin-top: 20px;
  height: 50px;
`;

export const AboutFactsItemNumber = styled(Heading2)`
  & > div {
    display: inline;
  }
`;

export const AboutFactsItemDescription = styled.div`
  text-align: center;
  color: grey;
`;
