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
import { useReview } from '../../redux/hooks';
import Loader from '../../components/Loader/Loader';
import { PAGES } from '../../constants';

export const Home = () => {
  const { isMobile, isTablet } = useDimension();
  const { loading } = useReview();

  if (loading) {
    return <Loader />;
  }

  const firstImageText = (
    <ImageMiddleWrapper className={`first-image-text ${isTablet && 'container'}`}>
      <ImageMiddleTextWrapper>
        <ImageTextHeader>YANA IVAKHNENKO</ImageTextHeader>
        <ImageTextDescription>
          Best Nails for <br />
          Best Moments
        </ImageTextDescription>
      </ImageMiddleTextWrapper>

      <ImageButtonsWrapper>
        <Link to={PAGES.SERVICES}>
          <Button size="large" variant="outlined">
            SERVICES
          </Button>
        </Link>
        <Link to={PAGES.APPOINTMENT}>
          <Button size="large" variant="outlined">
            MAKE AN APPOINTMENT
          </Button>
        </Link>
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
              Приветствую вас в мире красоты и элегантности. Я – мастер маникюра с
              преданностью к красоте и стилю, где каждая деталь имеет значение. Давайте
              вместе создадим уникальный облик ваших рук, чтобы подчеркнуть вашу
              индивидуальность и красоту.
            </p>

            <Link to={PAGES.ABOUT} className="about__button">
              <Button size="large" variant="outlined">
                Read more
              </Button>
            </Link>
          </AboutMeDescriptionWrapper>
        </AboutMeSectionWrapper>
      </section>

      <HomeSection className="order">
        <OrderSectionWrapper className="container">
          <Heading3>Хотите идеальный макикюр?</Heading3>
          <Button size="large" variant="outlined" color="white">
            ЗАКАЗАТЬ
          </Button>
        </OrderSectionWrapper>
      </HomeSection>

      <section about="advantages">
        <SectionWrapper>
          <div className="container">
            <Heading2>Преимущества работы со мной</Heading2>
            <AdvantageCartsWrapper>
              <AdvantageCart to={PAGES.ABOUT}>
                <AdvantageIcon>{renderIcon('nail')}</AdvantageIcon>
                <AdvantageCartDescription>Украинское качество</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to={PAGES.ABOUT}>
                <AdvantageIcon>{renderIcon('skin-care-service')}</AdvantageIcon>
                <AdvantageCartDescription>Индивидуальный подход</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to={PAGES.ABOUT}>
                <AdvantageIcon>{renderIcon('coffee')}</AdvantageIcon>
                <AdvantageCartDescription>Уютная атмосфера</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart to={PAGES.ABOUT}>
                <AdvantageIcon>{renderIcon('health-check')}</AdvantageIcon>
                <AdvantageCartDescription>Стерильный инструмент</AdvantageCartDescription>
              </AdvantageCart>
            </AdvantageCartsWrapper>
          </div>
        </SectionWrapper>
      </section>

      <HomeSection className="reviews">
        <ReviewsHomeWrapper className="container">
          <Heading2>Reviews</Heading2>

          <HomeReviews />

          <Link to={PAGES.REVIEWS} className="all-reviews-btn">
            <Button size="large" variant="primary" formType="squared">
              See all reviews
            </Button>
          </Link>
        </ReviewsHomeWrapper>
      </HomeSection>
    </>
  );
};
