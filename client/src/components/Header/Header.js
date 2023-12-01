import { useAuth } from '../../redux/hooks';
import { MyButton } from '../common/styles';
import {
  HeaderUserName,
  NavButtons,
  NavLogo,
  NavLogoWrapper,
  NavigationHeaderWrapper,
  NavigationLink,
  NavigationRightButtons
} from './styles';

const Header = () => {
  const { isAuthenticated, logoutUser, user, loading } = useAuth();

  return (
    <NavigationHeaderWrapper>
      <NavButtons className="" id="navbar">
        <NavLogoWrapper to="/" onClick={() => {}} title="Toggle Navigation Menu">
          <NavLogo />
          <i>YANA LOGO</i>
        </NavLogoWrapper>

        <NavigationLink to="/about">ABOUT</NavigationLink>
        <NavigationLink to="/portfolio">PORTFOLIO</NavigationLink>
        <NavigationLink to="/reviews">REVIEWS</NavigationLink>
        <NavigationLink to="/services">SERVICES</NavigationLink>
        <NavigationLink to="/contact">CONTACT</NavigationLink>

        {loading ? (
          <div>.... Spinner ....</div>
        ) : (
          <NavigationRightButtons>
            <p>
              {user?.name && (
                <>
                  Logged in as <HeaderUserName>{user.name}</HeaderUserName>
                </>
              )}
            </p>
            {!isAuthenticated && (
              <>
                <NavigationLink to="/register">Register</NavigationLink>
                <NavigationLink to="/login">Login</NavigationLink>
              </>
            )}
            {isAuthenticated && (
              <MyButton color="#999999" fontSize="1.1rem" onClick={() => logoutUser()}>
                Logout
              </MyButton>
            )}
          </NavigationRightButtons>
        )}
      </NavButtons>
    </NavigationHeaderWrapper>
  );
};

export default Header;
