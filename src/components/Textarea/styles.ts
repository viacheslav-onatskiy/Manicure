import styled from 'styled-components';

interface TextareaWrapperProps {
  $error: boolean;
}

export const TextareaWrapper = styled.div<TextareaWrapperProps>`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 5px;
  position: relative;

  & .field__wrapper {
    position: relative;
    background: ${(props) =>
      props.$error ? 'red' : 'linear-gradient(21deg, #10abff, #1beabd)'};

    // the width of the input border
    padding: 1px;

    width: 100%;
    border-radius: 5px;

    &:hover {
      outline: 1px solid #10abff;

      & svg {
        stroke: #fd4d99;
      }
    }

    *:not(span) {
      position: relative;
      display: inherit;
      border-radius: inherit;
      margin: 0;
      border: none;
      outline: none;
      z-index: 1;

      &:focus + .scaled__field,
      &:active + .scaled__field {
        opacity: 1;
        transform: scale(0.989);
      }
    }

    .scaled__field {
      transform: scale(0.993, 0.94);
      transition:
        transform 0.5s,
        opacity 0.25s;
      opacity: 0;

      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      border: none;

      box-shadow: ${(props) =>
        props.$error
          ? `inset 0 0 0 3px #fff,
        0 0 0 4px #fff,
        3px -3px 10px orangered,
        -3px 3px 10px red`
          : `inset 0 0 0 3px #fff,
        0 0 0 4px #fff,
        3px -3px 10px #1beabd,
        -3px 3px 10px #10abff`};
    }
  }
`;

export const TextareaLabel = styled.label`
  white-space: nowrap;
  cursor: pointer;
`;

interface TextareaStyleProps {
  $iconType: string;
  $required?: boolean;
  $error?: boolean;
}

export const TextareaStyle = styled.textarea.attrs<TextareaStyleProps>((props) => ({
  $iconType: props.$iconType
}))`
  padding: ${(props) => (props.$iconType ? '5px 10px 5px 40px' : '5px 10px')};
  width: 100%;
  border-radius: 5px;
  resize: none;
`;

export const TextareaIcon = styled.span`
  position: absolute;
  color: #9b9b9b;
  left: 10px;
  top: 16px;
  transform: translateY(-50%);
  z-index: 2;
`;
