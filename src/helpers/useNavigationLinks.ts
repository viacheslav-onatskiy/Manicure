import { useTranslation } from 'react-i18next';
import { PAGES } from '../constants';

interface NavigationLink {
  linkTo: string;
  text: string;
  iconName: string;
}

const useNavigationLinks = () => {
  const { t } = useTranslation();

  const navigationLinks: NavigationLink[] = [
    { linkTo: PAGES.HOME, text: t('pages.home').toUpperCase(), iconName: 'home' },
    { linkTo: PAGES.ABOUT, text: t('pages.about').toUpperCase(), iconName: 'about' },
    {
      linkTo: PAGES.PORTFOLIO,
      text: t('pages.portfolio').toUpperCase(),
      iconName: 'portfolio'
    },
    {
      linkTo: PAGES.REVIEWS,
      text: t('pages.reviews').toUpperCase(),
      iconName: 'reviews'
    },
    {
      linkTo: PAGES.SERVICES,
      text: t('pages.services').toUpperCase(),
      iconName: 'services'
    },
    {
      linkTo: PAGES.CONTACT,
      text: t('pages.contact').toUpperCase(),
      iconName: 'contact'
    }
  ];

  return { navigationLinks };
};

export default useNavigationLinks;
