import styled, { css } from 'styled-components';

// TODO
const loaderStyles = css`
  .fil1,
  .fill1 {
    fill: salmon;
    position: absolute;

    &:before,
    ::after {
      content: '1234';
      background: black;
      position: absolute;
      top: 50%;
      left: 20px;
      animation: animloader 0.3s 0.45s linear infinite alternate;
    }
  }

  .fil5 {
    fill: green;
  }

  .fil6 {
    fill: yellow;
    position: absolute;
    z-index: 1;

    &:before,
    &::after {
      content: '';
      width: 8px;
      height: 40px;
      border-radius: 4px;
      background: black;
      position: absolute;
    }
  }

  .fil0 {
    fill: red;
  }
  .fil2 {
    fill: wheat;
  }
  .fil3 {
    fill: pink;
  }
  .fil4 {
    fill: blue;
  }
`;

export const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000099;
  backdrop-filter: blur(2px);
  display: block;
  z-index: 101;

  & .loader {
    width: 12px;
    height: 100px;
    border-radius: 4px;
    display: block;
    margin: 20px auto;
    position: relative;
    background: currentColor;
    color: ${({ theme }) => theme.colors.primary1};
    box-sizing: border-box;
    animation: animloader 0.3s 0.3s linear infinite alternate;

    &::after,
    &::before {
      content: '';
      width: 12px;
      height: 100px;
      border-radius: 4px;
      background: currentColor;
      background: ${({ theme }) => theme.colors.primary2};
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 30px;
      box-sizing: border-box;
      animation: animloader 0.3s 0.5s linear infinite alternate;
    }
    &::before {
      left: -30px;
      animation-delay: 0s;
      background: ${({ theme }) => theme.colors.primary5};
    }
  }

  @keyframes animloader {
    100% {
      height: 100px;
    }
    0% {
      height: 4px;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  ${loaderStyles}
`;

export const LoaderBody = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  max-height: 50vh;
`;
