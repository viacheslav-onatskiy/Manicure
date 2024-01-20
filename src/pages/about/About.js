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

const About = () => {
  const { images } = useImageLoader();
  const { t } = useTranslation();

  return (
    <>
      <AboutWrapper>
        <AboutTopSectionWrapper>
          <AboutSection className="container">
            <AboutSectionItem>
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
            </AboutSectionItem>

            <AboutSectionItem className="header-picture">
              <AboutPresentTopPictureWrapper>
                <AboutPresentTopPicture />
              </AboutPresentTopPictureWrapper>
            </AboutSectionItem>
          </AboutSection>
        </AboutTopSectionWrapper>

        <AboutSection className="container about-me">
          <AboutSectionItem>
            <AboutPresentPicture />
          </AboutSectionItem>

          <AboutSectionItem>
            <AboutPresentDescription className="info">
              <Heading2>{t('about.infoHeading')}</Heading2>
              <Heading3 className="about-info_description">
                {t('about.infoDescription')}
              </Heading3>
            </AboutPresentDescription>

            <AboutPresentButtonWrapper>
              <Button size="large" variant="outlined" formType="rounded2">
                {t('common.book')}
              </Button>
            </AboutPresentButtonWrapper>
          </AboutSectionItem>
        </AboutSection>

        <AboutFacts />

        <AboutSection className="container insta">
          <AboutPresentHeading>{t('about.subscribeInstagram')}</AboutPresentHeading>

          <AboutInstaWrapper>
            <AboutInstaList>
              {images?.slice(0, 6).map((image, index) => {
                return (
                  <AboutInstaItem key={`${image.src} + index`}>
                    <div className="img">
                      <Link target="_blank" to={REDIRECTS.INSTAGRAM}>
                        <AboutInstaPicture
                          alt={image.alt}
                          className={`insta__img-${index}`}
                          src={image.src}
                        />
                        <AboutInstaPictureOverlay className="overlay">
                          <AboutInstagramIcon>
                            {renderIcon('instagram')}
                          </AboutInstagramIcon>
                        </AboutInstaPictureOverlay>
                      </Link>
                    </div>
                  </AboutInstaItem>
                );
              })}
            </AboutInstaList>
            <Heading3 className="about-gratitude">{t('about.gratitude1')}</Heading3>
            <Heading5>{t('about.gratitude2')}&#128519;</Heading5>
          </AboutInstaWrapper>
        </AboutSection>
      </AboutWrapper>
    </>
  );
};

export default About;
