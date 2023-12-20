import styled from 'styled-components';

export const ScrollToTopButtonElement = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
  background-color: var(--dark);
  color: var(--light);
  padding: 5px;
  border-radius: 50%;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
  z-index: 10;

  svg {
    width: 40px;
    height: 40px;
  }

  &.visible {
    display: block;
  }

  &:hover {
    opacity: 0.9;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    opacity: 1;
    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.35);
  }
`;
