import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 80%;
  overflow: hidden;
  margin: 30px auto 0;
`;

export const CarouselSlides = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselSlideWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const CarouselSlide = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  background: white;
  position: relative;
  border-radius: 10px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    width: 100px;
    height: 150px;
    background: lightgrey;
    border-radius: 50px/80px;
  }

  &:after {
    right: 0;
    left: initial;
    transform: translate(50%, -50%);
  }

  & .quote-icon {
    svg {
      fill: var(--darker);
      stroke: var(--darker);
    }
  }

  .slide__user {
    margin-top: 20px;
    color: var(--darker);
  }

  .star__rating {
    margin: 20px 0 0 0;
    background-color: green;
  }
`;

export const SlideDescription = styled.div`
  word-break: break-word;
  text-align: center;
  margin-top: 20px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  max-width: 60%;
  font-style: italic;
`;

export const CarouselArrow = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  font-size: 24px;
  background-color: transparent;
  color: var(--light);
  cursor: pointer;
  outline: none;

  & .left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }
`;

export const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px;
`;

export const CarouselIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #bbb;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #333;

  &:hover {
    transform: scale(1.05);
    background-color: var(--light);
  }

  &:active,
  &:focus {
    transform: scale(1.05);
    background-color: var(--darker);
  }

  &.active {
    background-color: #333;
    transform: scale(1.1);
  }
`;
