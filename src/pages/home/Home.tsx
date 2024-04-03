import { motion } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import Button from '../../components/atoms/Button';
import { Heading2, Heading3 } from '../../components/common/styles';
import { PAGES } from '../../constants';
import { useDimension } from '../../helpers/useDimension';
import { renderIcon } from '../../images/svgIcons';
import { useReview } from '../../redux/hooks';
import HomeReviews from './HomeReviews/HomeReviews';
import {
  AboutMeDescriptionWrapper,
  AboutMePicture,
  AboutMeSectionWrapper,
  AdvantageCart,
  AdvantageCartDescription,
  AdvantageCartsWrapper,
  AdvantageIcon,
  FirstImageWrapper,
  HomeSection,
  ImageButtonsWrapper,
  ImageMiddleTextWrapper,
  ImageMiddleWrapper,
  ImageTextDescription,
  ImageTextHeader,
  OrderSectionWrapper,
  ReviewsHomeWrapper,
  SectionWrapper
} from './styles';

export const Home: FC = () => {
  const { isMobile, isTablet } = useDimension();
  const { reviews, getReviews, loading } = useReview();
  const { t } = useTranslation();

  const FirstImageText = (
    <ImageMiddleWrapper className={`first-image-text ${isTablet && 'container'}`}>
      <motion.div
        whileInView={{ y: [-300, 0], opacity: [0.5, 1] }}
        transition={{ duration: 0.5 }}
      >
        <ImageMiddleTextWrapper>
          <ImageTextHeader>{t('common.yanaNameSurname').toUpperCase()}</ImageTextHeader>
          <ImageTextDescription>
            {t('home.imageTextDescription1')}
            <br />
            {t('home.imageTextDescription2')}
          </ImageTextDescription>
        </ImageMiddleTextWrapper>
      </motion.div>

      <ImageButtonsWrapper>
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.5 }}
          className="image-buttons-wrapper"
        >
          <Link to={PAGES.SERVICES}>
            <Button size="large" variant="outlined">
              {t('pages.services').toUpperCase()}
            </Button>
          </Link>
        </motion.div>
        <motion.div
          whileInView={{ x: [-300, 0] }}
          transition={{ duration: 0.5 }}
          className="image-buttons-wrapper"
        >
          <Link to={PAGES.CONTACT}>
            <Button size="large" variant="outlined">
              {t('common.makeAnAppointment').toUpperCase()}
            </Button>
          </Link>
        </motion.div>
      </ImageButtonsWrapper>
    </ImageMiddleWrapper>
  );

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');

    async function fetchData() {
      getReviews();
    }

    if (!reviews.length && isFirstVisit) {
      fetchData();
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section className="first-image">
        {isMobile ? (
          <>
            <FirstImageWrapper />
            {FirstImageText}
          </>
        ) : (
          <FirstImageWrapper>{FirstImageText}</FirstImageWrapper>
        )}
      </section>

      {/* ABOUT ME */}
      <section className="container about">
        <AboutMeSectionWrapper>
          <motion.div
            whileInView={{ x: [-300, 0], opacity: [0.5, 1] }}
            transition={{ duration: 0.8, ease: 'easeIn' }}
            className="about-picture-wrapper"
          >
            <AboutMePicture />
          </motion.div>

          <AboutMeDescriptionWrapper>
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0.5, 1] }}
              transition={{ duration: 0.8, ease: 'easeIn' }}
            >
              <Heading2>{t('home.aboutMeHeading')}</Heading2>
              <p className="about__description">{t('home.aboutMeDescription')}</p>

              <Link to={PAGES.ABOUT} className="about__button">
                <Button size="large" variant="outlined">
                  {t('home.aboutMeButton')}
                </Button>
              </Link>
            </motion.div>
          </AboutMeDescriptionWrapper>
        </AboutMeSectionWrapper>
      </section>

      <HomeSection className="order">
        <OrderSectionWrapper className="container">
          <Heading3>{t('home.orderHeading')}</Heading3>
          <Button size="large" variant="outlined" color="white">
            {t('common.writeMe')}
          </Button>
        </OrderSectionWrapper>
      </HomeSection>

      <section>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          className="about-picture-wrapper"
        >
          <SectionWrapper>
            <div className="container">
              <Heading2>{t('home.advantages.heading')}</Heading2>
              <AdvantageCartsWrapper>
                <AdvantageCart to={PAGES.ABOUT}>
                  <AdvantageIcon>{renderIcon('nail')}</AdvantageIcon>
                  <AdvantageCartDescription>
                    {t('home.advantages.advantage1')}
                  </AdvantageCartDescription>
                </AdvantageCart>

                <AdvantageCart to={PAGES.ABOUT}>
                  <AdvantageIcon>{renderIcon('skin-care-service')}</AdvantageIcon>
                  <AdvantageCartDescription>
                    {t('home.advantages.advantage2')}
                  </AdvantageCartDescription>
                </AdvantageCart>

                <AdvantageCart to={PAGES.ABOUT}>
                  <AdvantageIcon>{renderIcon('coffee')}</AdvantageIcon>
                  <AdvantageCartDescription>
                    {t('home.advantages.advantage3')}
                  </AdvantageCartDescription>
                </AdvantageCart>

                <AdvantageCart to={PAGES.ABOUT}>
                  <AdvantageIcon>{renderIcon('health-check')}</AdvantageIcon>
                  <AdvantageCartDescription>
                    {t('home.advantages.advantage4')}
                  </AdvantageCartDescription>
                </AdvantageCart>
              </AdvantageCartsWrapper>
            </div>
          </SectionWrapper>
        </motion.div>
      </section>

      <HomeSection className="reviews">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.8, ease: 'easeIn' }}
          className="about-picture-wrapper"
        >
          <ReviewsHomeWrapper className="container">
            <Heading2>{t('pages.reviews')}</Heading2>

            <HomeReviews />

            <Link to={PAGES.REVIEWS} className="all-reviews-btn">
              <Button size="large" variant="primary" formType="squared">
                {t('home.reviews.seeAllReviews')}
              </Button>
            </Link>
          </ReviewsHomeWrapper>
        </motion.div>
      </HomeSection>
    </>
  );
};
