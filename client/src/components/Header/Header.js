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

const Header = () => {
  const { isAuthenticated, logoutUser, user, loading } = useAuth();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigationLinks = [
    { linkTo: 'about', text: 'ABOUT' },
    { linkTo: 'portfolio', text: 'PORTFOLIO' },
    { linkTo: 'reviews', text: 'REVIEWS' },
    { linkTo: 'services', text: 'SERVICES' },
    { linkTo: 'contact', text: 'CONTACT' }
  ];

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    setVisible(isScrolledDown || currentScrollPos < 10);
  };

  let RAF;

  const onScroll = () => {
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
    // <NavigationHeaderWrapper isVisible={visible} style={{ top: visible ? '0' : '-100px' }}>
    <NavigationHeaderWrapper $isVisible={visible}>
      <NavButtons>
        <NavLogoWrapper to="/" title="Home page">
          <NavLogo />
          <i>YANA</i>
        </NavLogoWrapper>

        {navigationLinks?.map((link, index) => (
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
  );
};

export default Header;
