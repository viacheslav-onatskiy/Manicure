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
import { useDimension } from '../../helpers/useDimension';
import { PAGES } from '../../constants';

const Header = () => {
  const { isAuthenticated, logoutUser, user, loading } = useAuth();
  const { isTablet } = useDimension();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigationLinks = [
    { linkTo: PAGES.HOME, text: 'HOME', iconName: 'home' },
    { linkTo: PAGES.ABOUT, text: 'ABOUT', iconName: 'about' },
    { linkTo: PAGES.PORTFOLIO, text: 'PORTFOLIO', iconName: 'portfolio' },
    { linkTo: PAGES.REVIEWS, text: 'REVIEWS', iconName: 'reviews' },
    { linkTo: PAGES.SERVICES, text: 'SERVICES', iconName: 'services' },
    { linkTo: PAGES.CONTACT, text: 'CONTACT', iconName: 'contact' }
  ];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    setVisible(isScrolledDown || currentScrollPos < 10);
  };

  let RAF;

  const onScroll = () => {
    if (isTablet) {
      return;
    }

    if (!RAF) {
      RAF = requestAnimationFrame(() => {
        handleScroll();
        RAF = null;
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevScrollPos, visible]);

  return (
    <header>
      {isTablet ? (
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
            <NavLogoWrapper to={PAGES.HOME} title="Home page">
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
                    <NavigationLink to={PAGES.REGISTER}>
                      <Button formType="squared">Register</Button>
                    </NavigationLink>
                    <NavigationLink to={PAGES.LOGIN}>
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
    </header>
  );
};

export default Header;
