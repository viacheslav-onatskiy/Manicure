import styled from 'styled-components';

export const FirstImageWrapper = styled.div`
  ${'' /* background-image: ${(props) => props.imagePath ? props.imagePath : ''}; */}
  background-image: url(../../images/IMG_7952.jpeg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  background-attachment: fixed, fixed;
  background-position: center -333px;
  background-repeat: repeat, no-repeat;

  min-height: 300px;
  height: 550px;
  overflow: hidden;

  min-height: 300px;
  width: 100%;
`;

export const ImageMiddleTextWrapper = styled.div`
  background: rgba(0, 0, 0, 0.25);

  ${'' /* box-shadow: 0px 0px 15px 18px rgba(0, 0, 0, 0.01) inset; */}
  color: white;
  padding: 30px;
  border-radius: 10px;
  font-size: 30px;
  text-wrap: nowrap;
  text-align: center;
`;

export const ImageMiddleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageTextHeader = styled.div`
  color: white;
  font-size: 25px;
  text-transform: uppercase;
`;

export const ImageTextDescription = styled.div`
  margin-top: 20px;
  color: #fd4d99;
  font-size: 20px;
`;

export const ImageButtonsWrapper = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const FirstImage = styled.img`
  margin-top: -585px;
  object-fit: cover;
`;

export const AboutMeSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin: 100px 150px;
`;

export const AboutMePictureWrapper = styled.div`
  box-sizing: border-box;
  max-width: 50%;
  min-width: 50%;
  height: 500px;
`;

export const AboutMePicture = styled.div`
  background-image: url(../../images/IMG_6796.jpeg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 50%;
  height: 100%;
  width: 100%;
`;

export const AboutMeDescriptionWrapper = styled.div`
  font-size: 19px;
  margin-top: 20px;
  box-sizing: border-box;
  max-width: 50%;
`;

export const AboutMeHeader = styled.h2`
  color: #fd4d99;
  font-size: 1.7em;
  line-height: 1.7em;
`;

export const OrderSection = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 100px 150px;
  background: rgb(253, 77, 153);
  background: linear-gradient(
    150deg,
    rgba(253, 77, 153, 1) 14%,
    rgba(62, 233, 242, 1) 80%
  );
`;

export const OrderSectionDescription = styled.div`
  font-size: 40px;
`;

export const SectionWrapper = styled.div`
  padding: 80px 150px;
  text-align: center;
  font-size: 30px;

  &.advantages {
    color: #333333;
  }

  & .container {
    max-width: 72rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const AdvantageCartsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 35px;
`;

export const AdvantageCart = styled.div`
  width: 25%;
  border: 2px solid;
  border-color: var(--dark);
  border-radius: 10px;
  padding: 15px;
  background-color: white;

  &:hover {
    transform: scale(1.05);
  }

  & .advantage-icon {
    width: 70px;
    height: 70px;

    &:hover {
      transition: 0.5s;
      transform: rotate(180deg);
    }
  }
`;

export const AdvantageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 44px;
`;

export const AdvantageCartDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;
