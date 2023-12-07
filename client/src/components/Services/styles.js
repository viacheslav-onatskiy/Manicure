import styled from 'styled-components';
import ManicureImg from '../../images/IMG_8937.jpeg';

export const SectionContainer = styled.section`
  background-color: ${({ bgColor }) => bgColor || ''};
  color: ${({ color }) => color || 'black'};

  &.pricing {
    margin: 100px auto;
  }
`;

export const ServiceSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 35px 0;
`;

export const ServiceSectionItem = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const SectionHeading = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const ServiceImage = styled.div`
  width: 100%;
  min-height: 400px;
  height: 100%;
  background: no-repeat center/100%
    ${(props) => (props.imgSource ? `url(${ManicureImg})` : props.imgSource)};
`;

export const SectionDescription = styled.div`
  margin: 20px 0;
  font-size: 22px;

  p {
    margin-top: 20px;
  }
`;

export const SectionButtonContainer = styled.div`
  margin: auto 0 0 0;
  width: fit-content;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  border: 3px solid var(--darker);

  & * {
    text-align: start;
  }
`;

export const PricingItemBox = styled.div`
  flex: 0 0 auto;
  width: calc(100% / 3);
  padding: 40px 60px;

  &.pricing-price {
    background-color: var(--darker);
    color: white;
    padding-left: 80px;

    & p {
      color: var(--light);
    }
  }

  & .btn-appointment {
    margin-top: 30px;
    width: 100%;
    font-size: 17px;
    color: var(--black);
  }

  & .schedule-description {
    color: grey;
    margin-top: 25px;
  }

  &.pricing-image {
    position: relative;
  }
`;

export const PricingList = styled.ul``;

export const PricingListItem = styled.li`
  margin-top: 15px;

  & p {
    color: var(--grey);
  }
`;

export const PricingImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.25);
  z-index: 2;
  border-radius: 5px;
  box-shadow: 5px 5px 7px 1px rgba(0, 0, 0, 0.3);
`;
