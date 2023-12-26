import { Link } from 'react-router-dom';
import { Heading2, Heading3 } from '../../components/common/styles';
import {
  FirstImageWrapper,
  ImageMiddleTextWrapper,
  ImageTextHeader,
  ImageTextDescription,
  ImageButtonsWrapper,
  ImageMiddleWrapper,
  AboutMeSectionWrapper,
  AboutMePictureWrapper,
  AboutMePicture,
  AboutMeDescriptionWrapper,
  AdvantageCartsWrapper,
  AdvantageCart,
  SectionWrapper,
  AdvantageCartDescription,
  AdvantageIcon,
  OrderSectionWrapper,
  HomeSection,
  ReviewsHomeWrapper
} from './styles';
import Button from '../../components/atoms/Button';
import HomeReviews from './HomeReviews/HomeReviews';
import { renderIcon } from '../../images/svgIcons';
import { useDimension } from '../../helpers/useDimension';

export const Home = () => {
  const { isMobile, isTablet } = useDimension();

  const firstImageText = (
    <ImageMiddleWrapper className={`first-image-text ${isTablet && 'container'}`}>
      <ImageMiddleTextWrapper>
        <ImageTextHeader>
          Яна Ивакхненко. Профессиональный мастер маникюра.
        </ImageTextHeader>
        <ImageTextDescription>
          Делаю Ваши ногти красивее. <br />
          Дарю эмоции.
        </ImageTextDescription>
      </ImageMiddleTextWrapper>

      <ImageButtonsWrapper>
        <Button size="large" variant="outlined">
          Узнать больше
        </Button>
        <Button size="large" variant="outlined">
          Записаться
        </Button>
      </ImageButtonsWrapper>
    </ImageMiddleWrapper>
  );

  return (
    <>
      <section className="first-image">
        {isMobile ? (
          <>
            <FirstImageWrapper />
            {firstImageText}
          </>
        ) : (
          <FirstImageWrapper>{firstImageText}</FirstImageWrapper>
        )}
      </section>

      {/* ABOUT ME */}
      <section className="container about">
        <AboutMeSectionWrapper>
          <AboutMePictureWrapper>
            <AboutMePicture />
          </AboutMePictureWrapper>
          <AboutMeDescriptionWrapper>
            <Heading2>About me</Heading2>
            <p className="about__description">
              Hello! My name is Yana Ivakhnenko. I have been doing manicures since 2015. I
              am a professional nail master from Kharkiv.
            </p>

            <Link to="/about" className="about__button">
              <Button size="large" variant="outlined">
                Read more
              </Button>
            </Link>
          </AboutMeDescriptionWrapper>
        </AboutMeSectionWrapper>
      </section>

      <HomeSection className="order">
        <OrderSectionWrapper className="container">
          <Heading3>Хотите получить красивые ногти?</Heading3>
          <Button size="large" variant="outlined" color="white">
            ЗАКАЗАТЬ МАНИКЮР
          </Button>
        </OrderSectionWrapper>
      </HomeSection>

      <section about="advantages">
        <SectionWrapper>
          <div className="container">
            <Heading2>Преимущества работы со мной</Heading2>
            <AdvantageCartsWrapper>
              <AdvantageCart to="/about">
                <AdvantageIcon>{renderIcon('nail-extensions-service')}</AdvantageIcon>
                <AdvantageCartDescription>
                  Любые виды маникюра и педикюра
                </AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to="/about">
                <AdvantageIcon>{renderIcon('contact')}</AdvantageIcon>
                <AdvantageCartDescription>Приятная атмосфера</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to="/about">
                <AdvantageIcon>{renderIcon('userName')}</AdvantageIcon>
                <AdvantageCartDescription>Отличные эмоции</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to="/about">
                <AdvantageIcon>{renderIcon('skin-care-service')}</AdvantageIcon>
                <AdvantageCartDescription>Украынськэ качество</AdvantageCartDescription>
              </AdvantageCart>
            </AdvantageCartsWrapper>
          </div>
        </SectionWrapper>
      </section>

      <HomeSection className="reviews">
        <ReviewsHomeWrapper className="container">
          <Heading2>Reviews</Heading2>

          <HomeReviews />

          <Link to="/reviews" className="all-reviews-btn">
            <Button size="large" variant="primary" formType="squared">
              See all reviews
            </Button>
          </Link>
        </ReviewsHomeWrapper>
      </HomeSection>
    </>
  );
};
