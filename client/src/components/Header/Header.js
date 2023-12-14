import { useAuth } from '../../redux/hooks';
import Button from '../atoms/Button';
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

        <NavigationLink to="/about">
          <Button variant="primary" formType="squared">
            ABOUT
          </Button>
        </NavigationLink>
        <NavigationLink to="/portfolio">
          <Button variant="primary" formType="squared">
            PORTFOLIO
          </Button>
        </NavigationLink>
        <NavigationLink to="/reviews">
          <Button variant="primary" formType="squared">
            REVIEWS
          </Button>
        </NavigationLink>
        <NavigationLink to="/services">
          <Button variant="primary" formType="squared">
            SERVICES
          </Button>
        </NavigationLink>
        <NavigationLink to="/contact">
          <Button variant="primary" formType="squared">
            CONTACT
          </Button>
        </NavigationLink>

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
                <NavigationLink to="/register">
                  <Button formType="squared">Register</Button>
                </NavigationLink>
                <NavigationLink to="/login">
                  <Button formType="squared">Login</Button>
                </NavigationLink>
              </>
            )}
            {isAuthenticated && (
              <Button variant="outlined" onClick={() => logoutUser()}>
                Logout
              </Button>
            )}
          </NavigationRightButtons>
        )}
      </NavButtons>
    </NavigationHeaderWrapper>
  );
};

export default Header;
