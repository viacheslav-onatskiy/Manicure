import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationHeaderWrapper = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 1px 25px;
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
`;

export const NavigationLink = styled(NavLink)`
  margin: 0 8px;

  &.active button {
    color: #f0f0f0;
    background: ${({ theme }) => theme.colors.pink};
  }
`;

export const NavLogoWrapper = styled(NavLink)`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  display: flex;
  align-items: center;
  color: #fd4d99;
  font-weight: 600;
  margin-right: 25px;
`;

export const NavLogo = styled.div`
  background-image: url(../../images/IMG_7720.jpeg);
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
`;

export const HeaderUserName = styled.span`
  font-weight: 600;
`;

export const NavigationRightButtons = styled.div`
  margin-left: auto;
  display: flex;
  color: #999999;

  p {
    align-self: center;
  }
`;
