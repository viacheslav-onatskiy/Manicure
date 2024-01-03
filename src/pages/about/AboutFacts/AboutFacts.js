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
                <AboutFactsItemImageIcon>{renderIcon('message')}</AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Более 7 лет опыта</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="7" duration="11" /> : '7'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Уверенно создаю красивые маникюры с 2015 года.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('contactClock')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Свыше 1200 счастливых клиентов</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="1200" duration="15" /> : '1200'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Радую своих клиентов и делаю их дни ярче.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('contactAddress')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Более 2000 рабочих часов</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="2000" duration="20" /> : '2000'}
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Посвящаю время каждой детали, чтобы достичь идеального результата.
            </AboutFactsItemDescription>
          </AboutFactsItem>

          <AboutFactsItem>
            <AboutFactsItemImage>
              <AboutFactsItemImageWrapper>
                <AboutFactsItemImageIcon>
                  {renderIcon('userName')}
                </AboutFactsItemImageIcon>
              </AboutFactsItemImageWrapper>
            </AboutFactsItemImage>
            <AboutFactsItemHeading>Тысячи ногтей, сотни улыбок</AboutFactsItemHeading>
            <AboutFactsItemNumber>
              {isVisible ? <AnimatedCount number="1000" duration="18" /> : '1000'}+
            </AboutFactsItemNumber>
            <AboutFactsItemDescription>
              Моя страсть - создавать красивые ногти и вызывать у вас улыбки.
            </AboutFactsItemDescription>
          </AboutFactsItem>
        </AboutFactsList>
      </AboutFactsWrapper>
    </AboutSection>
  );
};

export default AboutFacts;
