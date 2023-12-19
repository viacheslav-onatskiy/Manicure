import styled, { css } from 'styled-components';
import { NavigationHeaderWrapper, NavigationLink } from '../styles';
import Button from '../../atoms/Button';

const mobileNavButtonStyles = css`
  padding: 0;

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

  DotsButton: styled(Button)`
    ${mobileNavButtonStyles}
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

    button {
      width: 100%;
      text-align: start;
      display: flex;
      align-items: center;
      gap: 10px;

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
