import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button.js';
import { Heading2, Heading3, Heading5 } from '../../components/common/styles.js';
import { REDIRECTS } from '../../constants.js';
import useImageLoader from '../../helpers/useImageLoader.js';
import { renderIcon } from '../../images/svgIcons.js';
import AboutFacts from './AboutFacts/AboutFacts.js';
import {
  AboutInstaItem,
  AboutInstaList,
  AboutInstaPicture,
  AboutInstaPictureOverlay,
  AboutInstaWrapper,
  AboutInstagramIcon,
  AboutPresentButtonWrapper,
  AboutPresentDescription,
  AboutPresentHeading,
  AboutPresentPicture,
  AboutPresentTopPicture,
  AboutPresentTopPictureWrapper,
  AboutSection,
  AboutSectionItem,
  AboutTopSectionWrapper,
  AboutWrapper
} from './styles.js';

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const { images } = useImageLoader();
  const { t } = useTranslation();

  return (
    <>
      <AboutWrapper>
        <AboutTopSectionWrapper>
          <AboutSection className="container">
            <AboutSectionItem>
              <motion.div
                whileInView={{ x: [-300, 0], opacity: [0.35, 1] }}
                transition={{ duration: 0.5, type: 'just' }}
              >
                <AboutPresentHeading>
                  {t('common.name').toUpperCase()}
                  <br />
                  {t('common.surname').toUpperCase()}
                </AboutPresentHeading>
                <AboutPresentDescription>
                  {t('about.presentDescription')}
                </AboutPresentDescription>

                <AboutPresentButtonWrapper>
                  <Button
                    className="presentation__button"
                    size="large"
                    variant="primary"
                    formType="rounded1"
                  >
                    {t('common.book').toUpperCase()}
                  </Button>
                </AboutPresentButtonWrapper>
              </motion.div>
            </AboutSectionItem>

            <AboutSectionItem className="header-picture">
              <motion.div
                whileInView={{ x: [300, 0], opacity: [0.5, 1] }}
                transition={{ duration: 0.55 }}
                style={{ height: '100%' }}
              >
                <AboutPresentTopPictureWrapper>
                  <AboutPresentTopPicture />
                </AboutPresentTopPictureWrapper>
              </motion.div>
            </AboutSectionItem>
          </AboutSection>
        </AboutTopSectionWrapper>

        <AboutSection className="container about-me">
          <AboutSectionItem>
            <motion.div
              whileInView={{ y: [-300, 0], opacity: [0.35, 1] }}
              transition={{ duration: 0.55 }}
            >
              <AboutPresentPicture />
            </motion.div>
          </AboutSectionItem>

          <AboutSectionItem>
            <AboutPresentDescription className="info">
              <motion.div
                whileInView={{ x: [-200, 0], opacity: [0.35, 1] }}
                transition={{ duration: 0.55 }}
              >
                <Heading2>{t('about.infoHeading')}</Heading2>
              </motion.div>
              <motion.div
                whileInView={{ x: [200, 0], opacity: [0.35, 1] }}
                transition={{ duration: 0.55 }}
              >
                <Heading3 className="about-info_description">
                  {t('about.infoDescription')}
                </Heading3>
              </motion.div>
            </AboutPresentDescription>

            <AboutPresentButtonWrapper>
              <motion.div
                whileInView={{ x: [-200, 0], opacity: [0.35, 1] }}
                transition={{ duration: 0.55 }}
              >
                <Button size="large" variant="outlined" formType="rounded2">
                  {t('common.book')}
                </Button>
              </motion.div>
            </AboutPresentButtonWrapper>
          </AboutSectionItem>
        </AboutSection>

        <AboutFacts />

        <AboutSection className="container insta">
          <AboutPresentHeading>{t('about.subscribeInstagram')}</AboutPresentHeading>

          <AboutInstaWrapper>
            <motion.div onViewportLeave={() => setIsInView(false)}>
              <AboutInstaList>
                {images?.slice(0, 6).map((image, index) => (
                  <AboutInstaItem key={`${image.src} + index`}>
                    <div className="img">
                      <Link target="_blank" to={REDIRECTS.INSTAGRAM}>
                        <motion.div
                          initial={false}
                          animate={
                            isLoaded && isInView
                              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
                          }
                          transition={{ duration: 1, delay: 1 }}
                          viewport={{ once: true }}
                          onViewportEnter={() => setIsInView(true)}
                        >
                          <AboutInstaPicture
                            alt={image.alt}
                            className={`insta__img-${index}`}
                            src={image.src}
                            onLoad={() => setIsLoaded(true)}
                          />
                          <AboutInstaPictureOverlay className="overlay">
                            <AboutInstagramIcon>
                              {renderIcon('instagram')}
                            </AboutInstagramIcon>
                          </AboutInstaPictureOverlay>
                        </motion.div>
                      </Link>
                    </div>
                  </AboutInstaItem>
                ))}
              </AboutInstaList>
            </motion.div>
            <Heading3 className="about-gratitude">{t('about.gratitude1')}</Heading3>
            <Heading5>{t('about.gratitude2')}&#128519;</Heading5>
          </AboutInstaWrapper>
        </AboutSection>
      </AboutWrapper>
    </>
  );
};

export default About;
