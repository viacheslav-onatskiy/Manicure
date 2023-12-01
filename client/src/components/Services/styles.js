import styled from 'styled-components';
import ManicureImg from '../../images/IMG_8937.jpeg';

export const SectionContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || ''};
  color: ${({ color }) => color || ''};
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
  ${'' /* background-color: ${props => props.imgSource || "#BF4F74"}; */}
  ${'' /* background: ${props => (props.primary ? "palevioletred" : "white")} */}
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
