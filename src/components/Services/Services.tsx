import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDimension } from '../../helpers/useDimension';
import pedicureImage from '../../images/portfolio/11.JPG';
import nailExtensionImage from '../../images/portfolio/17.JPG';
import nailArtImage from '../../images/portfolio/26.JPG';
import manicureImage from '../../images/portfolio/4.jpg';
import servicesImage from '../../images/services_hand.jpg';
import { IconType } from '../../images/svgIcons';
import Button from '../atoms/Button';
import { Heading2, Heading3, PageHeading } from '../common/styles';
import CardsList from './CardsList';
import ServiceForm from './ServiceForm';
import {
  PricingImage,
  PricingItemBox,
  PricingList,
  PricingListItem,
  PricingWrapper,
  SectionButtonContainer,
  SectionContainer,
  SectionDescription,
  SectionHeading,
  ServiceImage,
  ServiceSection,
  ServiceSectionItem
} from './styles';

export type ServiceType = {
  id: string;
  heading: string;
  iconName?: IconType;
  shortDescription: string;
  description: string;
  bgColor?: string;
  imageSrc: string;
};

const Services: React.FC = () => {
  const { t } = useTranslation();
  const { isTablet } = useDimension();

  const servicesList: ServiceType[] = [
    {
      id: 'manicure',
      heading: t('services.cards.1.heading'),
      iconName: 'manicure-service',
      shortDescription: t('services.cards.1.shortDescription'),
      description: t('services.cards.1.description'),
      bgColor: '#bef1f1',
      imageSrc: manicureImage
    },
    {
      id: 'pedicure',
      heading: t('services.cards.2.heading'),
      iconName: 'pedicure-service',
      shortDescription: t('services.cards.2.shortDescription'),
      description: t('services.cards.2.description'),
      imageSrc: pedicureImage
    },
    {
      id: 'nail-art',
      heading: t('services.cards.3.heading'),
      iconName: 'nail-art-service',
      shortDescription: t('services.cards.3.shortDescription'),
      description: t('services.cards.3.description'),
      imageSrc: nailArtImage
    },
    {
      id: 'nail-extensions',
      heading: t('services.cards.4.heading'),
      iconName: 'nail-extensions-service',
      shortDescription: t('services.cards.4.shortDescription'),
      description: t('services.cards.4.description'),
      imageSrc: nailExtensionImage
    },
    {
      id: 'skin-care',
      heading: t('services.cards.5.heading'),
      iconName: 'skin-care-service',
      shortDescription: t('services.cards.5.shortDescription'),
      description: t('services.cards.5.description'),
      imageSrc: manicureImage
    },
    {
      id: 'massage',
      heading: t('services.cards.6.heading'),
      iconName: 'massage-service',
      shortDescription: t('services.cards.6.shortDescription'),
      description: t('services.cards.6.description'),
      imageSrc: manicureImage
    }
  ];

  return (
    <>
      <PageHeading>{t('services.heading')}</PageHeading>

      <SectionContainer className="my-services">
        <CardsList items={servicesList} />
      </SectionContainer>

      <div id="service-sections-list">
        {servicesList.map((serviceItem, index) => (
          <SectionContainer
            $bgColor={serviceItem.bgColor}
            id={serviceItem.id}
            key={serviceItem.id}
          >
            <ServiceSection className="container">
              {!isTablet && (
                <ServiceSectionItem
                  style={{ order: `${!isTablet && (index % 2 === 0 ? 1 : 0)}` }}
                >
                  <motion.div
                    whileInView={{
                      x: [index % 2 === 0 ? -200 : 200, 0],
                      opacity: [0.5, 1]
                    }}
                    transition={{ duration: 0.8, ease: 'easeIn' }}
                  >
                    <ServiceImage $imageSrc={serviceItem.imageSrc} />
                  </motion.div>
                </ServiceSectionItem>
              )}
              <ServiceSectionItem>
                <motion.div
                  whileInView={{ x: [index % 2 === 0 ? -200 : 200, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <SectionHeading>
                    {t(`services.cards.${index + 1}.heading`)}
                  </SectionHeading>
                  <SectionDescription>
                    {t(`services.cards.${index + 1}.description`)}
                    {isTablet && <ServiceImage $imageSrc={serviceItem.imageSrc} />}
                  </SectionDescription>
                </motion.div>

                <SectionButtonContainer>
                  <Button formType="rounded2" variant="primary" size="large">
                    {t('common.makeAnAppointment')}
                  </Button>
                </SectionButtonContainer>
              </ServiceSectionItem>
            </ServiceSection>
          </SectionContainer>
        ))}
      </div>
      <ServiceForm />

      <SectionContainer $bgColor="#fff" color="#001515" className="pricing container">
        <PricingWrapper>
          <PricingItemBox>
            <motion.div
              whileInView={{ x: [-200, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                delay: (Math.floor(Math.random() * 10) + 1) / 10
              }}
            >
              <Heading2>{t('services.schedule.heading')}</Heading2>
            </motion.div>

            <motion.div
              whileInView={{ x: [-200, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                delay: (Math.floor(Math.random() * 10) + 1) / 10
              }}
            >
              <PricingList>
                <PricingListItem>
                  <Heading3>{t('services.schedule.mondaySaturday')}</Heading3>
                  <p>{t('services.schedule.time')}</p>
                </PricingListItem>
                <PricingListItem>
                  <Heading3>{t('services.schedule.sunday')}</Heading3>
                  <p>{t('services.schedule.closed')}</p>
                </PricingListItem>
              </PricingList>
              <p className="schedule-description">{t('services.schedule.description')}</p>
              <Button variant="primary" className="btn-appointment">
                {t('common.writeMe')}
              </Button>
            </motion.div>
          </PricingItemBox>

          <PricingItemBox className="pricing-image">
            <PricingImage src={servicesImage} alt="serviceImage" />
          </PricingItemBox>

          <PricingItemBox className="pricing-price">
            <motion.div
              whileInView={{ x: [200, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                delay: (Math.floor(Math.random() * 10) + 1) / 10
              }}
            >
              <Heading2>{t('services.pricing.heading')}</Heading2>
            </motion.div>

            <motion.div
              whileInView={{ x: [200, 0], opacity: [0, 1] }}
              transition={{
                duration: 0.5,
                delay: (Math.floor(Math.random() * 10) + 1) / 10
              }}
            >
              <PricingList>
                <PricingListItem>
                  <Heading3>{t('services.pricing.1.heading')}</Heading3>
                  <p>{t('services.pricing.1.description')}</p>
                </PricingListItem>
                <PricingListItem>
                  <Heading3>{t('services.pricing.2.heading')}</Heading3>
                  <p>{t('services.pricing.2.description')}</p>
                </PricingListItem>
                <PricingListItem>
                  <Heading3>{t('services.pricing.3.heading')}</Heading3>
                  <p>{t('services.pricing.3.description')}</p>
                </PricingListItem>
                <PricingListItem>
                  <Heading3>{t('services.pricing.4.heading')}</Heading3>
                  <p>{t('services.pricing.4.description')}</p>
                </PricingListItem>
                <PricingListItem>
                  <Heading3>{t('services.pricing.5.heading')}</Heading3>
                  <p>{t('services.pricing.5.description')}</p>
                </PricingListItem>
              </PricingList>
            </motion.div>
          </PricingItemBox>
        </PricingWrapper>
      </SectionContainer>
    </>
  );
};

export default Services;
