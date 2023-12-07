import {
  SectionButtonContainer,
  SectionDescription,
  SectionHeading,
  ServiceImage,
  ServiceSection,
  SectionContainer,
  ServiceSectionItem,
  PricingWrapper,
  PricingItemBox,
  PricingList,
  PricingListItem,
  PricingImage
} from './styles';
import { Heading2, Heading3, MyButton, PageHeading } from '../common/styles';
import ManicureImg from '../../images/IMG_8937.jpeg';
import ServiceForm from './ServiceForm/ServiceForm';
import servicesImage from '../../images/services_hand.jpg';

const Services = () => {
  return (
    <>
      <PageHeading>Services</PageHeading>

      <SectionContainer>
        <ServiceSection className="container">
          <ServiceSectionItem>
            <ServiceImage primary imgSource={ManicureImg} />
          </ServiceSectionItem>
          <ServiceSectionItem>
            <SectionHeading>Маникюр</SectionHeading>
            <SectionDescription>
              Ногти отрастают? А хочется норм выглядеть??!
              <p>
                Закажи маникюр и я отпилю тебе лишнее, дорощу нехватающее, будешь,
                наконец, норм выглядеть и чувствовать себя уверенее!
              </p>
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton rounded>Записаться</MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>

      <SectionContainer bgColor="#bef1f1" color="#001515">
        <ServiceSection className="container">
          <ServiceSectionItem>
            <SectionHeading>Педикюр</SectionHeading>
            <SectionDescription>
              Ногти отрастают? А хочется норм выглядеть??!
              <p>
                Закажи маникюр и я отпилю тебе лишнее, дорощу нехватающее, будешь,
                наконец, норм выглядеть и чувствовать себя уверенее!
              </p>
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton color="#001515" rounded>
                Записаться!
              </MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceImage primary imgSource={'red'} />
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>

      <ServiceForm />

      <SectionContainer bgColor="#fff" color="#001515" className="pricing container">
        <PricingWrapper>
          <PricingItemBox>
            <Heading2>Schedule</Heading2>

            <PricingList>
              <PricingListItem>
                <Heading3>Monday-Saturday</Heading3>
                <p>9AM - 5PM</p>
              </PricingListItem>
              <PricingListItem>
                <Heading3>Sunday</Heading3>
                <p>CLOSED</p>
              </PricingListItem>
            </PricingList>
            <p className="schedule-description">
              I will be glad to see you anytime at our salon.
            </p>
            <MyButton className="btn-appointment">MAKE AN APPOINTMENT</MyButton>
          </PricingItemBox>

          <PricingItemBox className="pricing-image">
            <PricingImage src={servicesImage} alt="serviceImage" />
          </PricingItemBox>

          <PricingItemBox className="pricing-price">
            <Heading2>Pricing</Heading2>

            <PricingList>
              <PricingListItem>
                <Heading3>Manicure</Heading3>
                <p>FROM $60.00</p>
              </PricingListItem>
              <PricingListItem>
                <Heading3>Pedicure</Heading3>
                <p>FROM $50.00</p>
              </PricingListItem>
              <PricingListItem>
                <Heading3>Nail Extension</Heading3>
                <p>FROM $70.00</p>
              </PricingListItem>
              <PricingListItem>
                <Heading3>Gel Pedicure</Heading3>
                <p>FROM $80.00</p>
              </PricingListItem>
              <PricingListItem>
                <Heading3>Nail Design</Heading3>
                <p>FROM $70.00</p>
              </PricingListItem>
            </PricingList>
          </PricingItemBox>
        </PricingWrapper>
      </SectionContainer>
    </>
  );
};

export default Services;
