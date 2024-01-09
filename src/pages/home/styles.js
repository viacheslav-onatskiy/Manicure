import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Heading2, Heading3 } from '../../components/common/styles';

export const FirstImageWrapper = styled.div`
  background-image: url(../../images/IMG_7952.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;
  height: 550px;
  min-height: 300px;
  width: 100%;
  position: relative;

  @media (min-width: ${({ theme }) => theme.screenSizes.mobile}) {
    background-attachment: fixed;
  }
`;

export const ImageMiddleTextWrapper = styled.div`
  color: white;
  padding: 30px;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    text-wrap: pretty;
  }

  @media (min-width: ${({ theme }) => theme.screenSizes.tablet}) {
    background: rgba(0, 0, 0, 0.25);
  }
`;

export const ImageMiddleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    position: initial;
    transform: none;
    background: rgba(0, 0, 0, 0.2);
    margin-top: 15px;
    border-radius: 10px;
    padding-bottom: 30px;
  }
`;

export const ImageTextHeader = styled(Heading2)`
  text-transform: uppercase;
`;

export const ImageTextDescription = styled(Heading3)`
  margin-top: 20px;
  color: #fd4d99;
`;

export const ImageButtonsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-wrap: wrap-reverse;
    margin: 25px 0;
  }

  button {
    color: ${({ theme }) => theme.colors.primary3};

    @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      color: ${({ theme }) => theme.colors.primary4};
      outline-color: ${({ theme }) => theme.colors.primary4};
      font-size: 24px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};
      outline-color: ${({ theme }) => theme.colors.primary1};
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary4};
      outline-color: ${({ theme }) => theme.colors.primary4};
    }
  }
`;

export const FirstImage = styled.img`
  margin-top: -585px;
  object-fit: cover;
`;

export const AboutMeSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
  gap: 25px;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-wrap: wrap-reverse;
    margin: 25px 0;
  }

  & .about__button {
    text-align: center;
  }

  & .about__button,
  & .about__description {
    margin-top: 30px;
    display: block;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      text-align: center;
    }
  }
`;

export const AboutMePictureWrapper = styled.div`
  box-sizing: border-box;
  max-width: 50%;
  min-width: 50%;
  min-height: 450px;

  @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    width: 100%;
    max-width: 100%;
  }
`;

export const AboutMePicture = styled.div`
  background-image: url(../../images/IMG_6796.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
`;

export const AboutMeDescriptionWrapper = styled.div`
  font-size: 19px;
  margin-top: 20px;
  box-sizing: border-box;
  max-width: 50%;

  @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    max-width: 100%;
  }
`;

export const AboutMeHeader = styled.h2`
  color: #fd4d99;
  font-size: 1.7em;
  line-height: 1.7em;
`;

export const HomeSection = styled.section`
  &.order {
    background: linear-gradient(
      150deg,
      rgba(253, 77, 153, 1) 14%,
      rgba(62, 233, 242, 1) 80%
    );
  }

  &.reviews {
    background-color: lightgrey;
    padding: 50px 0;

    @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      padding: 25px 0;
    }
  }
`;

export const OrderSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  color: white;
  padding: 50px 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-wrap: wrap;
    gap: 15px;
    padding: 25px 0;

    button {
      width: 50%;
      font-size: 22px;
    }
  }
`;

export const SectionWrapper = styled.div`
  padding: 50px;
  text-align: center;
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    padding: 20px;
  }

  &.advantages {
    color: #333333;
  }
`;

export const SectionHeader = styled(Heading2)`
  text-align: center;
`;

export const AdvantageCartsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 35px;

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    margin: 20px 0;
    flex-wrap: wrap;
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-wrap: wrap;
    gap: 20px 0;
  }
`;

export const AdvantageCart = styled(Link)`
  width: 25%;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px;
  padding: 15px;
  background-color: white;
  color: ${({ theme }) => theme.colors.dark};

  @media (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    flex: 0 0 48%;
    padding: 20px;
    width: auto;
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex: 0 0 100%;
  }

  &:hover {
    transform: scale(1.03);
  }

  &:active {
    transform: scale(1.05);
  }
`;

export const AdvantageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
  height: 70px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: rotate(180deg);
  }

  svg {
    width: 70px;
    height: 70px;
  }
`;

export const AdvantageCartDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;

export const ReviewsHomeWrapper = styled.div`
  & .all-reviews-btn {
    margin: 15px auto 0;
    display: block;
    text-align: center;

    button {
      font-size: 18px;
    }
  }
`;
