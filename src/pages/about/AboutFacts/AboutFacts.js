import { useRef } from 'react';
import { AboutSection } from '../styles.js';
import { useIsVisible } from '../../../helpers/useIsVisible.js';
import {
  AboutFactsItem,
  AboutFactsItemDescription,
  AboutFactsItemHeading,
  AboutFactsItemImage,
  AboutFactsItemImageIcon,
  AboutFactsItemImageWrapper,
  AboutFactsItemNumber,
  AboutFactsList,
  AboutFactsWrapper
} from './styles.js';
import { renderIcon } from '../../../images/svgIcons';
import AnimatedCount from '../../../components/AnimatedCount/AnimatedCount.js';

const AboutFacts = () => {
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <AboutSection className="facts" ref={ref}>
      <AboutFactsWrapper className="container">
        <AboutFactsList>
          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('time-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Более 7 лет опыта</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="7" duration="11" /> : '7'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Работаю в бьюти индустрии с 2016 года.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('services-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Более 5000 выполненных услуг</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="5000" duration="7" /> : '5000'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Успешно провела 5000+ маникюрных процедур.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('reset-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>
              90% клиентов возвращаются после первого визита
            </AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="90" duration="18" /> : '90'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Качество и индивидуальный подход – ключевые моменты возврата клиентов.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('care-experience')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>100% стерильность</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="100" duration="20" /> : '100'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Гарантирую безопасность каждого клиента, используя только стерильные
              инструменты.
            </AboutFactsItemDescription>
          </AboutFactsItem>
        </AboutFactsList>
      </AboutFactsWrapper>
    </AboutSection>
  );
};

export default AboutFacts;
