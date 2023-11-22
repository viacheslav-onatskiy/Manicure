import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationHeaderWrapper = styled.nav`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 10;
  padding: 3px 0;

  ${
    '' /* & .isActive {
    background: yellow;
  } */
  }

  a {
    styled(NavigationLink);
  }
`;

export const NavigationLink = styled(NavLink)`
  background: ${(props) => (props.$primary ? '#BF4F74' : '#333333')};

  margin: 0 7px 0 0;
  padding: 5px 7px;
  border-radius: 7px;
  color: #999999;

  ${
    '' /* color: ${(props) => props.active ? "#fff" : "#545e6f"};
  background: ${(props) => props.active ? "#7600dc" : "#f0f0f0"}; */
  }

  &.active {
    color: #f0f0f0;
    background: #bf4f74;
  }

  &:hover {
    background: pink;
    cursor: pointer;
    font-weight: 500;
  }

  &:active {
    color: green;
    font-weight: 500;
    background: #333333;
  }
`;

export const NavLogoWrapper = styled(NavLink)`
  background: ${(props) => (props.$primary ? '#BF4F74' : 'white')};
  display: flex;
  align-items: center;
  color: #fd4d99;
  font-weight: 600;
  margin: 0 20px;
`;

export const NavLogo = styled.div`
  background-image: url(../../images/IMG_7720.jpeg);
  ${'' /* background-attachment: fixed; */}
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
  gap: 15px;

  p {
    align-self: center;
  }
`;
