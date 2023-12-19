import { useEffect, useState } from 'react';
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
import MobileHeader from './MobileNavbar';

const Header = () => {
  const { isAuthenticated, logoutUser, user, loading } = useAuth();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigationLinks = [
    { linkTo: '', text: 'HOME', iconName: 'home' },
    { linkTo: 'about', text: 'ABOUT', iconName: 'about' },
    { linkTo: 'portfolio', text: 'PORTFOLIO', iconName: 'portfolio' },
    { linkTo: 'reviews', text: 'REVIEWS', iconName: 'reviews' },
    { linkTo: 'services', text: 'SERVICES', iconName: 'services' },
    { linkTo: 'contact', text: 'CONTACT', iconName: 'contact' }
  ];

  const [windowDimension, setWindowDimension] = useState(null);

  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowDimension <= 640;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    setVisible(isScrolledDown || currentScrollPos < 10);
  };

  let RAF;

  const onScroll = () => {
    if (isMobile) {
      return;
    }

    if (!RAF) {
      RAF = requestAnimationFrame(() => {
        handleScroll();
        RAF = null;
      });
    }
    console.log('onScroll:', onScroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos, visible]);

  return (
    <>
      {isMobile ? (
        <MobileHeader
          isVisible={visible}
          links={navigationLinks}
          isAuthenticated={isAuthenticated}
          user={user}
          logoutUser={logoutUser}
        />
      ) : (
        <NavigationHeaderWrapper $isVisible={visible}>
          <NavButtons>
            <NavLogoWrapper to="/" title="Home page">
              <NavLogo />
              <i>YANA</i>
            </NavLogoWrapper>

            {navigationLinks
              ?.filter((link) => link.text !== 'HOME')
              .map((link, index) => (
                <NavigationLink key={`${link.linkTo}-${index}`} to={link.linkTo}>
                  <Button variant="primary" formType="squared">
                    {link.text}
                  </Button>
                </NavigationLink>
              ))}

            {loading ? (
              <></>
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
      )}
    </>
  );
};

export default Header;
