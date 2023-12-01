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
import { Heading3, Heading5, MyButton } from '../../components/common/styles.js';

const About = () => {
  return (
    <>
      {/* <PageHeading>About</PageHeading> */}
      <AboutWrapper>
        <AboutTopSectionWrapper>
          <AboutSection className="container">
            <AboutSectionItem>
              <AboutPresentHeading>
                YANA <br /> IVAKHNENKO
              </AboutPresentHeading>
              <AboutPresentDescription>The best nail master</AboutPresentDescription>

              <AboutPresentButtonWrapper>
                <MyButton className="fill">BOOK NOW</MyButton>
              </AboutPresentButtonWrapper>
            </AboutSectionItem>

            <AboutSectionItem>
              <AboutPresentTopPictureWrapper>
                <AboutPresentTopPicture />
              </AboutPresentTopPictureWrapper>
            </AboutSectionItem>
          </AboutSection>
        </AboutTopSectionWrapper>

        <AboutSection className="container">
          <AboutSectionItem>
            <AboutPresentPicture />
          </AboutSectionItem>

          <AboutSectionItem>
            <AboutPresentHeading>Немного о себе</AboutPresentHeading>
            <AboutPresentDescription className="info">
              <p>
                Привет! Меня зовут Яна, и я - профессиональный сертифицированный мастер
                маникюра с 7 лет опыта. Мое призвание - создавать произведения искусства
                на ваших ногтях. Я стремлюсь к индивидуальному подходу к каждому клиенту,
                предоставляя высококачественные услуги и используя только лучшие
                материалы.
              </p>
              <p>Давайте вместе создадим неповторимый облик ваших ногтей!</p>
            </AboutPresentDescription>

            <AboutPresentButtonWrapper>
              <MyButton>BOOK NOW</MyButton>
            </AboutPresentButtonWrapper>
          </AboutSectionItem>
        </AboutSection>

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
