import styled from 'styled-components';

export const AboutWrapper = styled.div``;

export const AboutTopSectionWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary5};
  margin: 20px;
  height: 450px;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    height: auto;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 35px;
  padding: 35px 0;
  color: ${({ theme }) => theme.colors.dark};

  &.about-me {
    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      flex-wrap: wrap;
    }
  }

  &.insta {
    display: block;
  }

  &.facts {
    background-color: #c7c7ed;
    background-color: #dcdcf1;
  }
`;

export const AboutSectionItem = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screenSizes.laptop}) {
    width: 50%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    &.header-picture {
      display: none;
    }
  }
`;

export const AboutPresentTopPictureWrapper = styled.div`
  position: relative;
`;

export const AboutPresentTopPicture = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.screenSizes.mobile}) {
    background-position: center;
    background-image: url('../../images/IMG_7720.jpeg');
    background-position: top -155px right -1px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 450px;
    position: absolute;
    top: 0;
    border-radius: 5px;
    box-shadow: 8px 8px 11px 1px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    background-position: center;
  }
`;

export const AboutPresentPicture = styled.div`
  background-image: url('../../images/IMG_6796.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 70%;
  min-height: 450px;
  margin: 0 auto;
`;

export const AboutPresentHeading = styled.div`
  font-size: 48px;
  text-align: center;
  margin-top: 25px;
`;

export const AboutPresentDescription = styled.div`
  font-weight: 500;
  margin-top: 30px;
  font-size: 28px;
  text-align: end;
  font-style: italic;

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    text-align: center;
  }

  &.info {
    text-align: justify;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      font-size: 15px;
      margin-left: 25px;
      margin-right: 25px;
    }

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      margin-left: 15px;
      margin-right: 15px;
    }

    h2 {
      font-size: 25px;
    }
    h3 {
      font-size: 20px;

      @media screen and (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
        font-size: 15px;
      }
    }
  }
`;

export const AboutPresentButtonWrapper = styled.div`
  margin: 40px 0 0;
  text-align: center;

  .presentation__button {
    font-size: 25px;
  }
`;

export const AboutInstaWrapper = styled.div`
  margin-top: 20px;
`;

export const AboutInstaList = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 350px;

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    height: auto;
  }
`;

export const AboutInstaItem = styled.div`
  width: calc(100% / 6);
  height: 100%;

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
    width: calc(100% / 3);
  }

  .img {
    position: relative;
    background-size: cover;

    a {
      display: block;
    }

    &:hover {
      box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      overflow: hidden;

      & .overlay {
        opacity: 1;
        cursor: pointer;
      }
    }

    &:active {
      box-shadow: 5px 5px 7px 1px rgba(0, 0, 0, 0.25);
    }
  }

  &:nth-child(1) .img {
    top: 0;
    left: 25px;
    z-index: 4;
  }

  &:nth-child(2) .img {
    top: 60px;
    left: 10px;
    z-index: 2;
  }

  &:nth-child(3) .img {
    top: 15px;
    left: -12px;
    z-index: 1;
  }

  &:nth-child(4) .img {
    top: 0;
    left: -30px;
    z-index: 2;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      left: 30px;
    }
  }

  &:nth-child(5) .img {
    top: 25px;
    left: -50px;
    z-index: 2;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      left: 20px;
    }
  }

  &:nth-child(6) .img {
    top: 0;
    left: -60px;
    z-index: 2;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      left: -10px;
    }
  }

  &:hover .img {
    z-index: 6;
  }

  @media screen and (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    &:nth-child(1n) .img {
      top: 0;
      left: 0;
    }
  }
`;

export const AboutInstaPicture = styled.img``;

export const AboutInstaPictureOverlay = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: inherit;
  background-color: rgba(238, 205, 200, 0.4);
  opacity: 0;
`;

export const AboutInstagramIcon = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    stroke-width: 1.5;
    transform: translate(-50%, -50%) scale(3);
  }
`;
