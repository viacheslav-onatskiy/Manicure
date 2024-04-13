import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGES, REDIRECTS } from '../../../constants';
import useNavigationLinks from '../../../helpers/useNavigationLinks';
import { renderIcon } from '../../../images/svgIcons';
import { User } from '../../../redux/actions/auth';
import { UserActionType } from '../../../redux/reducers/auth';
import Select, { SelectOption } from '../../Select/Select';
import Button from '../../atoms/Button';
import { Heading5 } from '../../common/styles';
import { HeaderUserName, NavLogo, NavLogoWrapper, NavigationLink } from '../styles';
import { MobileNavbar } from './styles';

interface MobileHeaderProps {
  isAuthenticated: boolean | null;
  user: UserActionType;
  logoutUser: () => void;
  languages: SelectOption[];
  isVisible: boolean;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({
  isAuthenticated,
  user,
  logoutUser,
  languages,
  isVisible
}) => {
  const { t, i18n } = useTranslation();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isNavExtraExpanded, setIsNavExtraExpanded] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const extraSidebarRef = useRef<HTMLDivElement>(null);
  const hamburgerButtonRef = useRef<HTMLButtonElement>(null);
  const dotsButtonRef = useRef<HTMLButtonElement>(null);
  const { navigationLinks } = useNavigationLinks();

  useEffect(() => {
    const closeSidebar = (event: MouseEvent) => {
      if (sidebarRef.current && sidebarRef.current.contains(event.target as Node)) {
        return;
      }
      if (
        hamburgerButtonRef.current &&
        hamburgerButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }

      setIsNavExpanded(false);
    };

    document.addEventListener('mouseup', closeSidebar, true);

    return () => document.removeEventListener('mouseup', closeSidebar, true);
  }, []);

  useEffect(() => {
    const closeExtraSidebar = (event: MouseEvent) => {
      if (
        extraSidebarRef.current &&
        extraSidebarRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (dotsButtonRef.current && dotsButtonRef.current.contains(event.target as Node)) {
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
            <MobileNavbar.HamburgerIcon className={isNavExpanded ? 'active' : ''} />
          </MobileNavbar.HamburgerButton>
        </div>
        <div>
          <NavLogoWrapper to={PAGES.HOME} title="Home page">
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
            <MobileNavbar.DotsIcon className={isNavExtraExpanded ? 'active' : ''} />
          </MobileNavbar.DotsButton>
        </div>
      </MobileNavbar.Wrapper>

      <MobileNavbar.Sidebar
        className="sidebar"
        ref={sidebarRef}
        $isVisible={isNavExpanded}
      >
        <MobileNavbar.Items>
          {navigationLinks.map((link, index) => (
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
            {(user as User)?.name && (
              <HeaderUserName>{(user as User).name}</HeaderUserName>
            )}
          </p>
          {!isAuthenticated && (
            <>
              <NavigationLink to={PAGES.REGISTER}>
                <Button
                  formType="filled"
                  onClick={() => {
                    setIsNavExpanded(false);
                    setIsNavExtraExpanded(false);
                  }}
                >
                  {t('pages.register')}
                </Button>
              </NavigationLink>
              <NavigationLink to={PAGES.LOGIN}>
                <Button
                  formType="filled"
                  onClick={() => {
                    setIsNavExpanded(false);
                    setIsNavExtraExpanded(false);
                  }}
                >
                  {t('pages.login')}
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
              {t('common.logout')}
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
            <Heading5>{t('header.callMe')}:</Heading5>
            <MobileNavbar.ContactLink href={`tel:${REDIRECTS.PHONE_NUMBER}`}>
              <Button>+1-672-272-14-17</Button>
            </MobileNavbar.ContactLink>
          </MobileNavbar.ExtraSidebarItem>

          <MobileNavbar.ExtraSidebarItem>
            <Heading5>{t('header.schedule')}:</Heading5>
            {t('header.monSat')}: {t('header.time')}
          </MobileNavbar.ExtraSidebarItem>

          <Select
            className="header-language"
            options={languages}
            onSelect={(value) => i18n.changeLanguage(value.value)}
            initialValue={i18n.language}
            isVisibleHeader={isVisible}
            label="Select language"
          />

          <MobileNavbar.ExtraSidebarItem className="extra-links">
            <MobileNavbar.ContactLink
              target="_blank"
              href={REDIRECTS.FACEBOOK}
              rel="noreferrer"
              title="My Facebook link"
            >
              {renderIcon('facebook')}
            </MobileNavbar.ContactLink>
            <MobileNavbar.ContactLink href={`mailto:${REDIRECTS.GMAIL}`}>
              {renderIcon('contactEmail')}
            </MobileNavbar.ContactLink>
            <MobileNavbar.ContactLink
              target="_blank"
              rel="noreferrer"
              href={REDIRECTS.INSTAGRAM}
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
