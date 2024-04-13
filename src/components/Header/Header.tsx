import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PAGES } from '../../constants';
import { useDimension } from '../../helpers/useDimension';
import useNavigationLinks from '../../helpers/useNavigationLinks';
import { User } from '../../redux/actions/auth';
import { useAuth } from '../../redux/hooks';
import Select from '../Select/Select';
import Button from '../atoms/Button';
import MobileHeader from './MobileNavbar';
import {
  HeaderUserName,
  NavButtons,
  NavLogo,
  NavLogoWrapper,
  NavigationHeaderWrapper,
  NavigationLink,
  NavigationRightButtons
} from './styles';

interface Language {
  value: string;
  label: string;
}

const languages: Language[] = [
  { value: 'en', label: 'English' },
  { value: 'ru', label: 'Russian' }
];

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isAuthenticated, logoutUser, user } = useAuth();
  const { isTablet } = useDimension();
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const { navigationLinks } = useNavigationLinks();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrolledDown = prevScrollPos > currentScrollPos;

    setPrevScrollPos(currentScrollPos);

    setVisible(isScrolledDown || currentScrollPos < 10);
  };

  let RAF: number | null;

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
          isAuthenticated={isAuthenticated}
          user={user}
          logoutUser={logoutUser}
          languages={languages}
        />
      ) : (
        <NavigationHeaderWrapper $isVisible={visible}>
          <NavButtons>
            <NavLogoWrapper to={PAGES.HOME} title="Home page">
              <NavLogo />
              <i> {t('common.name')}</i>
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

            <NavigationRightButtons>
              {(user as User)?.name && (
                <HeaderUserName>{(user as User).name}</HeaderUserName>
              )}
              {!isAuthenticated && (
                <>
                  <NavigationLink to={PAGES.REGISTER}>
                    <Button formType="squared">{t('pages.register')}</Button>
                  </NavigationLink>
                  <NavigationLink to={PAGES.LOGIN}>
                    <Button formType="squared">{t('pages.login')}</Button>
                  </NavigationLink>
                </>
              )}
              {isAuthenticated && (
                <Button variant="outlined" size="small" onClick={() => logoutUser()}>
                  {t('pages.logout')}
                </Button>
              )}

              <Select
                className="header-language"
                options={languages}
                onSelect={(value) => i18n.changeLanguage(value.value)}
                initialValue={i18n.language}
                isVisibleHeader={visible}
                label="Select language"
              />
            </NavigationRightButtons>
          </NavButtons>
        </NavigationHeaderWrapper>
      )}
    </header>
  );
};

export default Header;
