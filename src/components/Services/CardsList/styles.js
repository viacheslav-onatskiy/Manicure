import styled from 'styled-components';
import { Heading2, Heading5 } from '../../common/styles';

export const CardsListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 25px 0;
`;

export const CardItemWrapper = styled.div`
  width: calc(100% / 3);
  padding: 40px 32px;
  position: relative;
  transition: transform 0.2s ease-in-out;

  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

  &:nth-child(3n) {
    border-right: 1px solid transparent;
  }

  &:nth-child(n + 4) {
    border-bottom: 1px solid transparent;

    @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
      border-right: 1px solid transparent;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};

      &:not(:last-child) {
        border-right: 1px solid transparent;
        border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    width: calc(100% / 2);
    padding: 30px 22px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    width: 100%;
    padding: 20px 15px;
    border-right: 1px solid transparent;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary4};
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
    transform: scale(1.05);
    z-index: 1;
    border-radius: 5px;
    border: 1px solid transparent;

    .card__item-image {
      background-color: ${({ theme }) => theme.colors.primary2};
    }
  }
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 auto;
`;

export const CardItemImage = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary3};
  border-radius: 50%;
  position: relative;
`;

export const CardItemImageIcon = styled.div`
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

export const CardItemHeading = styled(Heading5)`
  margin-top: 20px;
`;

export const CardItemNumber = styled(Heading2)`
  & > div {
    display: inline;
  }
`;

export const CardItemDescription = styled.div`
  margin-top: 15px;
  text-align: center;
  color: grey;
`;
