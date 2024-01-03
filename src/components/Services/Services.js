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
import { Heading2, Heading3, PageHeading } from '../common/styles';
import ServiceForm from './ServiceForm/ServiceForm';
import servicesImage from '../../images/services_hand.jpg';
import Button from '../atoms/Button';
import CardsList from './CardsList';

const Services = () => {
  const servicesList = [
    {
      heading: 'Manicure',
      iconName: 'manicure-service',
      description: `
      -Classic Manicure
      -European Manicure
      -Spa Manicure`
    },
    {
      heading: 'Pedicure',
      iconName: 'pedicure-service',
      description: `
      -Classic Pedicure
      -Spa Pedicure`
    },
    {
      heading: 'Nail Art',
      iconName: 'nail-art-service',
      description: `
      -French Manicure
      -Artistic Design`
    },
    {
      heading: 'Nail Extensions',
      iconName: 'nail-extensions-service',
      description: `-Gel Extensions`
    },
    {
      heading: 'Skin Care',
      iconName: 'skin-care-service',
      description: `
      -Skin care description`
    },
    {
      heading: 'Massage',
      iconName: 'massage-service',
      description: `Massage description`
    }
  ];

  return (
    <>
      <PageHeading>My Services</PageHeading>

      <SectionContainer className="my-services">
        <CardsList items={servicesList} />
      </SectionContainer>

      <SectionContainer>
        <ServiceSection className="container">
          <ServiceSectionItem>
            <ServiceImage />
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
              <Button formType="rounded2" variant="primary" size="large">
                Записаться
              </Button>
            </SectionButtonContainer>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>

      <SectionContainer $bgColor="#bef1f1" color="#001515">
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
              <Button formType="rounded2" variant="outlined" size="large">
                Записаться!
              </Button>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceImage />
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>

      <ServiceForm />

      <SectionContainer $bgColor="#fff" color="#001515" className="pricing container">
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
            <Button variant="primary" className="btn-appointment">
              MAKE AN APPOINTMENT
            </Button>
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
