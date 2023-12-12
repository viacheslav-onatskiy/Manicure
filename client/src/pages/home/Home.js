import { Link } from 'react-router-dom';
import { Heading3, MyButton } from '../../components/common/styles';
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
  SectionHeader,
  OrderSectionWrapper,
  HomeSection,
  ReviewsHomeWrapper
} from './styles';
import Carousel from '../../components/carousel';

export const Home = () => {
  return (
    <>
      {/* First image */}
      <section>
        <div style={{ background: "src('../../images/IMG_0474')" }}>
          <FirstImageWrapper /* imagePath='../../images/IMG_0474.jpeg' */>
            {/* <FirstImage src={firstImg} alt="First image text" /> */}
            <ImageMiddleWrapper>
              <ImageMiddleTextWrapper>
                <ImageTextHeader>Делаю Ваши ногти красивее.</ImageTextHeader>
                <ImageTextHeader>Дарю эмоции.</ImageTextHeader>
                <ImageTextDescription>
                  Яна Ивакхненко. Профессиональный мастер маникюра.
                </ImageTextDescription>
              </ImageMiddleTextWrapper>

              <ImageButtonsWrapper>
                <MyButton>Узнать больше</MyButton>
                <MyButton>Записаться</MyButton>
              </ImageButtonsWrapper>
            </ImageMiddleWrapper>
          </FirstImageWrapper>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="container">
        <AboutMeSectionWrapper>
          <AboutMePictureWrapper>
            <AboutMePicture />
          </AboutMePictureWrapper>
          <AboutMeDescriptionWrapper>
            <Heading3>About me</Heading3>
            <p className="about__description">
              Hello! My name is Yana Ivakhnenko. I have been doing manicures since 2015. I
              am a professional nail master from Kharkiv.
            </p>

            <Link to={'/about'} className="about__button">
              <MyButton>Read more</MyButton>
            </Link>
          </AboutMeDescriptionWrapper>
        </AboutMeSectionWrapper>
      </section>

      <HomeSection className="order">
        <OrderSectionWrapper className="container">
          <Heading3>Хотите получить красивые ногти?</Heading3>
          <MyButton>ЗАКАЗАТЬ МАНИКЮР</MyButton>
        </OrderSectionWrapper>
      </HomeSection>

      <section about="advantages">
        <SectionWrapper className="advantages">
          <div className="container">
            <SectionHeader>Преимущества работы со мной</SectionHeader>
            <AdvantageCartsWrapper>
              <AdvantageCart>
                <AdvantageIcon>
                  <svg
                    className="advantage-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 2.5C5.44772 2.5 5 2.94772 5 3.5V5.5C5 6.05228 5.44772 6.5 6 6.5C6.55228 6.5 7 6.05228 7 5.5V3.5C7 2.94772 6.55228 2.5 6 2.5Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13 21.5C15.973 21.5 18.441 19.3377 18.917 16.5H19C21.2091 16.5 23 14.7091 23 12.5C23 10.2909 21.2091 8.5 19 8.5V7.5H1V15.5C1 18.8137 3.68629 21.5 7 21.5H13ZM3 9.5V15.5C3 17.7091 4.79086 19.5 7 19.5H13C15.2091 19.5 17 17.7091 17 15.5V9.5H3ZM21 12.5C21 13.6046 20.1046 14.5 19 14.5V10.5C20.1046 10.5 21 11.3954 21 12.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M9 3.5C9 2.94772 9.44771 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5V5.5C11 6.05228 10.5523 6.5 10 6.5C9.44771 6.5 9 6.05228 9 5.5V3.5Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 2.5C13.4477 2.5 13 2.94772 13 3.5V5.5C13 6.05228 13.4477 6.5 14 6.5C14.5523 6.5 15 6.05228 15 5.5V3.5C15 2.94772 14.5523 2.5 14 2.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </AdvantageIcon>
                <AdvantageCartDescription>
                  Любые виды маникюра и педикюра
                </AdvantageCartDescription>
              </AdvantageCart>
              <AdvantageCart>
                <AdvantageIcon>
                  <svg
                    className="advantage-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5354 2.87868C16.3638 1.70711 14.4644 1.70711 13.2928 2.87868L11.8786 4.29289C11.8183 4.35317 11.7611 4.41538 11.707 4.47931C11.653 4.41539 11.5958 4.3532 11.5355 4.29293L10.1213 2.87871C8.94975 1.70714 7.05025 1.70714 5.87868 2.87871C4.70711 4.05029 4.70711 5.94978 5.87868 7.12136L6.75732 8H1V14H3V22H21V14H23V8H16.6567L17.5354 7.12132C18.707 5.94975 18.707 4.05025 17.5354 2.87868ZM14.707 7.12132L16.1212 5.70711C16.5117 5.31658 16.5117 4.68342 16.1212 4.29289C15.7307 3.90237 15.0975 3.90237 14.707 4.29289L13.2928 5.70711C12.9023 6.09763 12.9023 6.7308 13.2928 7.12132C13.6833 7.51184 14.3165 7.51184 14.707 7.12132ZM10.1213 5.70714L8.70711 4.29293C8.31658 3.9024 7.68342 3.9024 7.29289 4.29293C6.90237 4.68345 6.90237 5.31662 7.29289 5.70714L8.70711 7.12136C9.09763 7.51188 9.7308 7.51188 10.1213 7.12136C10.5118 6.73083 10.5118 6.09767 10.1213 5.70714ZM21 10V12H3V10H21ZM12.9167 14H19V20H12.9167V14ZM11.0834 14V20H5V14H11.0834Z"
                      fill="currentColor"
                    />
                  </svg>
                </AdvantageIcon>
                <AdvantageCartDescription>Приятная атмосфера</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart>
                <AdvantageIcon>
                  <svg
                    className="advantage-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z"
                      fill="currentColor"
                    />
                  </svg>
                </AdvantageIcon>
                <AdvantageCartDescription>Отличные эмоции</AdvantageCartDescription>
              </AdvantageCart>

              <AdvantageCart>
                <AdvantageIcon>
                  <svg
                    className="advantage-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.45887 2L1 6.01478L2.33826 7.50107L6.79713 3.48629L5.45887 2Z"
                      fill="currentColor"
                    />
                    <path d="M11 8H13V12H16V14H11V8Z" fill="currentColor" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5 12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18.5411 2L23 6.01478L21.6617 7.50107L17.2029 3.48629L18.5411 2Z"
                      fill="currentColor"
                    />
                  </svg>
                </AdvantageIcon>
                <AdvantageCartDescription>Украынськэ качество</AdvantageCartDescription>
              </AdvantageCart>
            </AdvantageCartsWrapper>
          </div>
        </SectionWrapper>
      </section>

      <HomeSection className="reviews">
        <ReviewsHomeWrapper className="container">
          <Heading3>Reviews</Heading3>
          <Carousel />

          <Link to="/reviews" className="all-reviews-btn">
            <MyButton>See all reviews</MyButton>
          </Link>
        </ReviewsHomeWrapper>
      </HomeSection>
    </>
  );
};
