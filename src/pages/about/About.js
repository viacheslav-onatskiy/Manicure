import { Link } from 'react-router-dom';
import { images } from '../../components/ImageGallery/ImageGallery.js';
import { renderIcon } from '../../images/svgIcons.js';
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
import { Heading2, Heading3, Heading5 } from '../../components/common/styles.js';
import AboutFacts from './AboutFacts/AboutFacts.js';
import Button from '../../components/atoms/Button/Button.js';

const About = () => {
  return (
    <>
      <AboutWrapper>
        <AboutTopSectionWrapper>
          <AboutSection className="container">
            <AboutSectionItem>
              <AboutPresentHeading>
                YANA <br /> IVAKHNENKO
              </AboutPresentHeading>
              <AboutPresentDescription>The best nail master</AboutPresentDescription>

              <AboutPresentButtonWrapper>
                <Button
                  className="presentation__button"
                  size="large"
                  variant="primary"
                  formType="rounded1"
                >
                  BOOK NOW
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
            <AboutPresentHeading>Немного о себе</AboutPresentHeading>

            <AboutPresentDescription className="info">
              <Heading2>🌸 Добро пожаловать в мир красоты и ухоженности! 🌸</Heading2>
              <Heading3>
                Привет! Меня зовут Яна, и я - профессиональный сертифицированный мастер
                маникюра с 7 лет опыта. Мое призвание - создавать произведения искусства
                на ваших ногтях. Я стремлюсь к индивидуальному подходу к каждому клиенту,
                предоставляя высококачественные услуги и используя только лучшие
                материалы.
                <br />
                С моими услугами ваши руки станут настоящим произведением искусства,
                отражающим вашу индивидуальность и стиль. <br />
                Давайте вместе создадим неповторимый облик ваших ногтей!
              </Heading3>
            </AboutPresentDescription>

            <AboutPresentButtonWrapper>
              <Button size="large" variant="outlined" formType="rounded2">
                BOOK NOW
              </Button>
            </AboutPresentButtonWrapper>
          </AboutSectionItem>
        </AboutSection>

        <AboutFacts />

        <AboutSection className="container insta">
          <AboutPresentHeading>Подписывайся на мой инстаграм</AboutPresentHeading>

          <AboutInstaWrapper>
            <AboutInstaList>
              {images.slice(0, 6).map((image, index) => {
                return (
                  <AboutInstaItem key={`${image.imageUrl} + index`}>
                    <div className="img">
                      <Link target="_blank" to="https://www.instagram.com/yana_nails_/">
                        <AboutInstaPicture
                          alt={image.alt}
                          className={`insta__img-${index}`}
                          src={image.imageUrl}
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
            <Heading3>Спасибо за просмотр!</Heading3>
            <Heading5>
              Буду рада вашим лайкам❤️, подпискам ✅ и комментариям &#128519;
            </Heading5>
          </AboutInstaWrapper>
        </AboutSection>
      </AboutWrapper>
    </>
  );
};

export default About;
