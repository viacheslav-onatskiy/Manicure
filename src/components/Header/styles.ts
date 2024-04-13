import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface NavigationHeaderWrapperProps {
  $isVisible: boolean;
}

export const NavigationHeaderWrapper = styled.nav.attrs<NavigationHeaderWrapperProps>(
  (props) => ({
    $isVisible: props.$isVisible
  })
)`
  top: ${({ $isVisible }) => ($isVisible ? '0' : '-100px')};
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 1px 25px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
  transition: top 0.3s;

  @media (max-width: 1200px) {
    padding: 1px 15px;
  }
`;

export const NavigationLink = styled(NavLink)`
  margin: 0 8px;

  @media (max-width: 1200px) {
    margin: 0 5px;
  }

  &.active button {
    color: #f0f0f0;
    background: ${({ theme }) => theme.colors.pink};
  }
`;

interface NavLogoWrapperProps {
  $primary?: boolean;
}

export const NavLogoWrapper = styled(NavLink)<NavLogoWrapperProps>`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  display: flex;
  align-items: center;
  color: #fd4d99;
  font-weight: 600;
  margin-right: 25px;

  @media (max-width: 1200px) {
    margin-right: 15px;
  }
`;

export const NavLogo = styled.div`
  background-image: url(../../images/IMG_7720.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-right: 5px;
`;

export const NavButtons = styled.div`
  display: flex;

  @media (max-width: 1200px) {
    button {
      padding: 5px;
    }
  }
`;

export const HeaderUserName = styled.span`
  font-weight: 600;
`;

export const NavigationRightButtons = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
  align-items: center;

  p {
    align-self: center;
  }
`;
