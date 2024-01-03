import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SectionWrapper = styled.div`
  padding: 80px 150px;
  text-align: center;

  &.advantages {
    background-color: white;
    color: #333333;
  }
`;

export const FooterSection = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 35px 0;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    padding: 15px 0;
  }
`;

export const FooterLinkList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 100%;
  list-style-type: none;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .footer__link {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.primary1};

      svg {
        color: ${({ theme }) => theme.colors.primary1};
        transition: all 0.2s ease-in-out;
        transform: scale(1.05);
      }
    }

    &:active {
      color: ${({ theme }) => theme.colors.primary2};

      svg {
        color: ${({ theme }) => theme.colors.primary2};
        transition: all 0.2s ease-in-out;
        transform: scale(1.1);
      }
    }
  }
`;

export const FooterLink = styled.li`
  color: ${({ theme }) => theme.colors.white};
`;

export const FooterNavList = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    flex-wrap: wrap;
  }
`;

export const FooterIconsLinkList = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.screenSizes.tablet}) {
    justify-content: center;

    div {
      width: auto;
    }
  }

  svg {
    width: 36px;
    height: 36px;
  }
`;

export const FooterLine = styled.div`
  width: 100%;
  border: 1px solid #2f2e42;
  margin: 20px;
`;

export const FooterNavLink = styled(Link)`
  &:hover button {
    color: ${({ theme }) => theme.colors.primary1};
  }
  &:active button {
    color: ${({ theme }) => theme.colors.primary2};
  }

  @media (max-width: ${({ theme }) => theme.screenSizes.mobile}) {
    width: 30%;
    text-align: center;
  }
`;

export const FooterRightsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary5};
  color: white;
  text-align: center;
  padding: 15px 0;
`;

export const FooterRights = styled.div``;
