import styled from 'styled-components';

export const ImageGalleryWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 25px 0;
  transition: all 2s ease;

  &.gallery {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 10px;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
      display: flex;
      flex-wrap: wrap;
    }

    & .gallery__item {
      overflow: hidden;

      &:hover {
        cursor: pointer;

        border-radius: 8px;

        .gallery__img {
          transform: scale(1.1);

          @media screen and (min-width: ${({ theme }) => theme.screenSizes.laptop}) {
            -webkit-filter: brightness(100%);
          }
        }
      }
    }

    &:nth-child(4n + 1) {
      grid-column: 1 / span 2;
    }

    & .gallery__item:nth-child(4n + 1) {
      grid-column: 1 / span 2;

      @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
        grid-column: 1 / span 1;
      }
    }
    & .gallery__item:nth-child(4n + 2) {
      grid-column: 3 / span 2;

      @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
        grid-column: 2 / span 1;
      }
    }
    & .gallery__item:nth-child(4n + 3) {
      grid-column: 5 / span 2;

      @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
        grid-column: 1 / span 1;
      }
    }
    & .gallery__item:nth-child(4n + 4) {
      grid-column: 7 / span 2;

      @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
        grid-column: 2 / span 1;
      }
    }
  }

  & .gallery__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease-out allow-discrete;

    @media screen and (min-width: ${({ theme }) => theme.screenSizes.laptop}) {
      -webkit-filter: brightness(60%);
    }
  }

  & .gallery__item--1 {
    grid-row: 1 / span 5;
  }

  & .gallery__item--2 {
    grid-row: 1 / span 3;
  }

  & .gallery__item--3 {
    grid-row: 1 / span 5;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 6 / span 5;
    }
  }
  & .gallery__item--4 {
    grid-row: 1 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 4 / span 4;
    }
  }

  & .gallery__item--5 {
    grid-row: 6 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 11 / span 3;
    }
  }
  & .gallery__item--6 {
    grid-row: 4 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 8 / span 4;
    }
  }
  & .gallery__item--7 {
    grid-row: 6 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 14 / span 4;
    }
  }
  & .gallery__item--8 {
    grid-row: 5 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 12 / span 4;
    }
  }

  & .gallery__item--9 {
    grid-row: 9 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 18 / span 4;
    }
  }
  & .gallery__item--10 {
    grid-row: 8 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 16 / span 3;
    }
  }
  & .gallery__item--11 {
    grid-row: 10 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 22 / span 3;
    }
  }
  & .gallery__item--12 {
    grid-row: 9 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 19 / span 4;
    }
  }

  & .gallery__item--13 {
    grid-row: 13 / span 2;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 25 / span 2;
    }
  }
  & .gallery__item--14 {
    grid-row: 11 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 23 / span 3;
    }
  }
  & .gallery__item--15 {
    grid-row: 13 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 27 / span 4;
    }
  }
  & .gallery__item--16 {
    grid-row: 13 / span 2;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 26 / span 2;
    }
  }

  & .gallery__item--17 {
    grid-row: 15 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 31 / span 4;
    }
  }
  & .gallery__item--18 {
    grid-row: 14 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 28 / span 4;
    }
  }
  & .gallery__item--19 {
    grid-row: 17 / span 5;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 35 / span 5;
    }
  }
  & .gallery__item--20 {
    grid-row: 15 / span 5;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 32 / span 5;
    }
  }

  & .gallery__item--21 {
    grid-row: 19 / span 4;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 40 / span 4;
    }
  }
  & .gallery__item--22 {
    grid-row: 18 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 37 / span 3;
    }
  }
  & .gallery__item--23 {
    grid-row: 22 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 44 / span 3;
    }
  }
  & .gallery__item--24 {
    grid-row: 20 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 40 / span 3;
    }
  }

  & .gallery__item--25 {
    grid-row: 23 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 47 / span 3;
    }
  }
  & .gallery__item--26 {
    grid-row: 21 / span 5;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 43 / span 5;
    }
  }
  & .gallery__item--27 {
    grid-row: 25 / span 1;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 50 / span 1;
    }
  }
  & .gallery__item--28 {
    grid-row: 23 / span 3;

    @media screen and (max-width: ${({ theme }) => theme.screenSizes.laptop}) {
      grid-row: 48 / span 3;
    }
  }

  & .from-left {
    position: relative;
    animation: from-left-animation 2s;
  }

  @keyframes from-left-animation {
    0% {
      left: -200px;
      top: 0px;
      opacity: 0%;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }

  & .from-right {
    position: relative;
    animation: from-right-animation 2s;
  }

  @keyframes from-right-animation {
    0% {
      left: 200px;
      top: 0px;
      opacity: 0%;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;

export const ImageGalleryColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;

  & img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
  }
`;

export const LightBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
