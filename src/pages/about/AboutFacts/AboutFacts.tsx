import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedCount from '../../../components/AnimatedCount';
import { useIsVisible } from '../../../helpers/useIsVisible';
import { renderIcon } from '../../../images/svgIcons';
import { AboutSection } from '../styles';
import {
  AboutFactsItemDescription,
  AboutFactsItemHeading,
  AboutFactsItemImage,
  AboutFactsItemImageIcon,
  AboutFactsItemImageWrapper,
  AboutFactsItemNumber,
  AboutFactsList,
  AboutFactsWrapper
} from './styles';

const AboutFacts = () => {
  const ref = useRef(null);
  const { t } = useTranslation();
  const isVisible = useIsVisible(ref);

  return (
    <AboutSection className="facts" ref={ref}>
      <AboutFactsWrapper className="container">
        <AboutFactsList>
          <motion.div
            whileInView={{ y: [-150, 0], opacity: [0.35, 1] }}
            transition={{ duration: 0.55 }}
            className="about-facts-item"
          >
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('time-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>{t('about.facts.1.heading')}</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="7" duration="11" /> : '7'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              {t('about.facts.1.description')}
            </AboutFactsItemDescription>
          </motion.div>

          <motion.div
            whileInView={{ y: [150, 0], opacity: [0.35, 1] }}
            transition={{ duration: 0.55 }}
            className="about-facts-item"
          >
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('services-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>{t('about.facts.2.heading')}</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="5000" duration="7" /> : '5000'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              {t('about.facts.2.description')}
            </AboutFactsItemDescription>
          </motion.div>

          <motion.div
            whileInView={{ y: [-150, 0], opacity: [0.35, 1] }}
            transition={{ duration: 0.55 }}
            className="about-facts-item"
          >
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('reset-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>{t('about.facts.3.heading')}</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="90" duration="18" /> : '90'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              {t('about.facts.3.description')}
            </AboutFactsItemDescription>
          </motion.div>

          <motion.div
            whileInView={{ y: [150, 0], opacity: [0.35, 1] }}
            transition={{ duration: 0.55 }}
            className="about-facts-item"
          >
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('care-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>{t('about.facts.4.heading')}</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="100" duration="20" /> : '100'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              {t('about.facts.4.description')}
            </AboutFactsItemDescription>
          </motion.div>
        </AboutFactsList>
      </AboutFactsWrapper>
    </AboutSection>
  );
};

export default AboutFacts;
