import styled, { css } from 'styled-components';
import { NavigationHeaderWrapper, NavigationLink } from '../styles';
import Button from '../../atoms/Button';

const mobileNavButtonStyles = css`
  padding: 10px;

  &:active {
    transform: scale(1.05);
  }

  svg {
    width: 48px;
    height: 48px;
  }
`;

export const MobileNavbar = {
  Wrapper: styled(NavigationHeaderWrapper)`
    z-index: 100;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 8px;
  `,

  HamburgerButton: styled(Button)`
    ${mobileNavButtonStyles}
  `,

  HamburgerIcon: styled.span`
    width: 24px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary1};
    backface-visibility: hidden;
    border-radius: 0;
    transform: rotate(180deg);

    position: relative;
    display: block;
    margin: auto;
    transition: 0.3s all ease;

    &::before,
    &:after {
      transform-origin: 1.71429px center;
      width: 24px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.primary1};
      backface-visibility: hidden;
      border-radius: 0;

      content: '';
      position: absolute;
      left: 0;
      transition: 0.3s all ease;
    }

    &:before {
      top: -8px;
    }

    &:after {
      top: 8px;
    }

    &.active {
      transform: rotate(360deg);

      &::before,
      &:after {
        top: 0;
        width: 15px;
      }

      &:before {
        -webkit-transform: rotate3d(0, 0, 1, -40deg);
        transform: rotate3d(0, 0, 1, -40deg);
      }

      &:after {
        -webkit-transform: rotate3d(0, 0, 1, 40deg);
        transform: rotate3d(0, 0, 1, 40deg);
      }
    }
  `,

  DotsIcon: styled.span`
    position: absolute;
    width: 6px;
    height: 6px;
    background: ${({ theme }) => theme.colors.primary1};
    border-radius: 50%;
    transition: 0.3s all ease;
    margin-top: -3px;
    margin-left: -3px;

    &::before,
    &:after {
      position: absolute;
      width: 6px;
      height: 6px;
      background: ${({ theme }) => theme.colors.primary1};
      border-radius: 50%;
      transition: 0.3s all ease;
      margin-top: -3px;
      margin-left: -3px;

      content: '';
    }

    &:before {
      bottom: 100%;
      margin-bottom: 3px;
    }

    &:after {
      top: 100%;
      margin-top: 3px;
    }

    &.active {
      transform: scale(0.8);

      &:before {
        transform: translateY(18px);
      }

      &:after {
        transform: translateY(-18px);
      }
    }
  `,

  DotsButton: styled(Button)`
    ${mobileNavButtonStyles}
    padding: 15px;
  `,

  Sidebar: styled.div.attrs((props) => ({
    $isVisible: props.$isVisible
  }))`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    max-width: 70%;
    width: 100%;
    z-index: 9;
    background-color: ${({ theme }) => theme.colors.primary4};
    transform: ${({ $isVisible }) =>
      $isVisible ? `translateX(0)` : `translateX(-100%)`};
    transition: 0.5s ease-in-out;

    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;

    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
  `,

  Items: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
  `,

  Item: styled(NavigationLink)`
    margin: 10px 0 0;

    @media (max-height: 768px) and (orientation: landscape) {
      margin: 0;
    }

    button {
      width: 100%;
      text-align: start;
      display: flex;
      align-items: center;
      gap: 10px;

      @media (max-height: 768px) and (orientation: landscape) {
        padding: 5px 10px;
      }

      svg {
        width: 28px;
        height: 28px;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.primary1};

        svg {
          transform: scale(1.05);
        }
      }

      &:active {
        background-color: ${({ theme }) => theme.colors.primary5};

        svg {
          transform: scale(1.1);
        }
      }
    }
  `,

  UserWrapper: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.dark};
    padding: 10px 5px;

    .mobile__user-name {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary1};
    }

    button {
      color: ${({ theme }) => theme.colors.primary1};
      outline-color: ${({ theme }) => theme.colors.primary1};

      &:hover {
        color: ${({ theme }) => theme.colors.primary2};
        outline-color: ${({ theme }) => theme.colors.primary2};
      }

      &:active {
        color: ${({ theme }) => theme.colors.primary3};
        outline-color: ${({ theme }) => theme.colors.primary3};
      }
    }
  `,

  ExtraSidebar: styled.div.attrs((props) => ({
    $isVisible: props.$isVisible
  }))`
    position: fixed;
    right: 0;
    top: 0px;
    z-index: 111;
    background-color: ${({ theme }) => theme.colors.primary4};
    transform: ${({ $isVisible }) =>
      $isVisible ? `translateY(50px)` : `translateY(-100%)`};
    transition: 0.5s ease-in-out;

    box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.15);
  `,

  ExtraSidebarItems: styled.div`
    display: flex;
    flex: 1;
    padding: 10px;
    flex-direction: column;
  `,

  ExtraSidebarItem: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    button {
      color: ${({ theme }) => theme.colors.black};

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.dark2};
      }
    }

    h5 {
      font-weight: 600;
    }

    &.extra-links {
      margin-top: 10px;
      justify-content: space-around;
      align-items: start;
    }
  `,

  ContactLink: styled.a`
    color: ${({ theme }) => theme.colors.black};

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.dark2};
      transform: scale(1.05);
    }
  `
};
