import { useEffect, useRef, useState } from 'react';
import { MobileNavbar } from './styles';
import { renderIcon } from '../../../images/svgIcons';
import { HeaderUserName, NavLogo, NavLogoWrapper, NavigationLink } from '../styles';
import Button from '../../atoms/Button';
import { Heading5 } from '../../common/styles';

const MobileHeader = ({ links, isAuthenticated, user, logoutUser }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isNavExtraExpanded, setIsNavExtraExpanded] = useState(false);
  const sidebarRef = useRef(null);
  const extraSidebarRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const dotsButtonRef = useRef(null);

  useEffect(() => {
    const closeSidebar = (event) => {
      if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
        return;
      }
      if (
        hamburgerButtonRef.current &&
        hamburgerButtonRef.current.contains(event.target)
      ) {
        return;
      }

      setIsNavExpanded(false);
    };

    document.addEventListener('mouseup', closeSidebar, true);

    return () => document.removeEventListener('mouseup', closeSidebar, true);
  }, []);

  useEffect(() => {
    const closeExtraSidebar = (event) => {
      if (extraSidebarRef.current && extraSidebarRef.current.contains(event.target)) {
        return;
      }
      if (dotsButtonRef.current && dotsButtonRef.current.contains(event.target)) {
        return;
      }

      setIsNavExtraExpanded(false);
    };

    document.addEventListener('mouseup', closeExtraSidebar, true);

    return () => document.removeEventListener('mouseup', closeExtraSidebar, true);
  }, []);

  return (
    <>
      <MobileNavbar.Wrapper>
        <div>
          <MobileNavbar.HamburgerButton
            ref={hamburgerButtonRef}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {renderIcon('nav-hamburger')}
          </MobileNavbar.HamburgerButton>
        </div>
        <div>
          <NavLogoWrapper to="/" title="Home page">
            <NavLogo />
            <i>YANA</i>
          </NavLogoWrapper>
        </div>
        <div>
          <MobileNavbar.DotsButton
            ref={dotsButtonRef}
            onClick={() => {
              setIsNavExtraExpanded(!isNavExtraExpanded);
            }}
          >
            {renderIcon('ellipsis-dots')}
          </MobileNavbar.DotsButton>
        </div>
      </MobileNavbar.Wrapper>

      <MobileNavbar.Sidebar
        className="sidebar"
        ref={sidebarRef}
        $isVisible={isNavExpanded}
      >
        <MobileNavbar.Items>
          {links.map((link, index) => (
            <MobileNavbar.Item key={`${link.linkTo}-${index}`} to={link.linkTo}>
              <Button
                formType="squared"
                size="large"
                onClick={() => setIsNavExpanded(false)}
              >
                {renderIcon(link.iconName)}
                <div>{link.text}</div>
              </Button>
            </MobileNavbar.Item>
          ))}
        </MobileNavbar.Items>
        <MobileNavbar.UserWrapper>
          <p className="mobile__user-name">
            {user?.name && <HeaderUserName>{user.name}</HeaderUserName>}
          </p>
          {!isAuthenticated && (
            <>
              <NavigationLink to="/register">
                <Button
                  formType="filled"
                  onClick={() => {
                    setIsNavExpanded(false);
                    setIsNavExtraExpanded(false);
                  }}
                >
                  Register
                </Button>
              </NavigationLink>
              <NavigationLink to="/login">
                <Button
                  formType="filled"
                  onClick={() => {
                    setIsNavExpanded(false);
                    setIsNavExtraExpanded(false);
                  }}
                >
                  Login
                </Button>
              </NavigationLink>
            </>
          )}
          {isAuthenticated && (
            <Button
              variant="outlined"
              onClick={() => {
                logoutUser();
                setIsNavExpanded(false);
                setIsNavExtraExpanded(false);
              }}
            >
              Logout
            </Button>
          )}
        </MobileNavbar.UserWrapper>
      </MobileNavbar.Sidebar>

      <MobileNavbar.ExtraSidebar
        $isVisible={isNavExtraExpanded}
        className="extra-sidebar"
        ref={extraSidebarRef}
      >
        <MobileNavbar.ExtraSidebarItems>
          <MobileNavbar.ExtraSidebarItem>
            <Heading5>Call me: </Heading5>
            <MobileNavbar.ContactLink href="tel:+1672-272-14-17">
              <Button>+1-672-272-14-17</Button>
            </MobileNavbar.ContactLink>
          </MobileNavbar.ExtraSidebarItem>

          <MobileNavbar.ExtraSidebarItem>
            <Heading5>Opening Hours:</Heading5>Mon-Sat: 9am - 5pm
          </MobileNavbar.ExtraSidebarItem>

          <MobileNavbar.ExtraSidebarItem className="extra-links">
            <MobileNavbar.ContactLink
              target="_blank"
              href="mailto:email@example.com"
              rel="noreferrer"
              title="My Facebook link"
            >
              {renderIcon('facebook')}
            </MobileNavbar.ContactLink>
            <MobileNavbar.ContactLink
              target="_blank"
              href="mailto:email@example.com"
              rel="noreferrer"
            >
              {renderIcon('contactEmail')}
            </MobileNavbar.ContactLink>
            <MobileNavbar.ContactLink
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/yana_nails_/"
            >
              {renderIcon('instagram')}
            </MobileNavbar.ContactLink>
          </MobileNavbar.ExtraSidebarItem>
        </MobileNavbar.ExtraSidebarItems>
      </MobileNavbar.ExtraSidebar>
    </>
  );
};

export default MobileHeader;
