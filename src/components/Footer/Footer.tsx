import { useTranslation } from 'react-i18next';
import { REDIRECTS } from '../../constants';
import useNavigationLinks from '../../helpers/useNavigationLinks';
import { renderIcon } from '../../images/svgIcons';
import { ContactDescription, ContactIcon, ContactLink } from '../../pages/contact/styles';
import Button from '../atoms/Button';
import {
  FooterIconsLinkList,
  FooterLine,
  FooterLink,
  FooterLinkList,
  FooterNavLink,
  FooterNavList,
  FooterRights,
  FooterRightsWrapper,
  FooterSection,
  FooterWrapper
} from './styles';

const Footer = () => {
  const { t } = useTranslation();
  const { navigationLinks } = useNavigationLinks();

  return (
    <FooterSection>
      <FooterWrapper className="container">
        <FooterLinkList>
          <FooterLink>
            <ContactDescription>
              <ContactLink
                className="footer__link"
                target="_blank"
                href={REDIRECTS.GOOGLE_MAP}
                rel="noreferrer"
                title="Find me on Google maps"
              >
                <ContactIcon>{renderIcon('contactAddress')}</ContactIcon>
                3355 North Rd Burnaby, BC V3J 7T9
              </ContactLink>
            </ContactDescription>
          </FooterLink>

          <FooterIconsLinkList>
            <ContactDescription>
              <ContactLink
                className="footer__link"
                target="_blank"
                href={REDIRECTS.FACEBOOK}
                rel="noreferrer"
                title="My Facebook link"
              >
                {renderIcon('facebook')}
              </ContactLink>
            </ContactDescription>
            <ContactDescription>
              <ContactLink
                className="footer__link"
                href={`mailto:${REDIRECTS.GMAIL}`}
                title="Text me a message"
              >
                {renderIcon('contactEmail')}
              </ContactLink>
            </ContactDescription>
          </FooterIconsLinkList>

          <FooterLink>
            <ContactDescription>
              <ContactLink
                href={`tel:${REDIRECTS.PHONE_NUMBER}`}
                title="Call me"
                className="footer__link"
              >
                <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
                {t('common.callMe')}: +1-672-272-14-17
              </ContactLink>
            </ContactDescription>
          </FooterLink>
        </FooterLinkList>

        <FooterLine />

        <FooterNavList>
          {navigationLinks.map((link, index) => (
            <FooterNavLink to={link.linkTo} key={link.linkTo + index}>
              <Button>{link.text}</Button>
            </FooterNavLink>
          ))}
        </FooterNavList>
      </FooterWrapper>
      <FooterRightsWrapper>
        <FooterRights className="container">
          Yana Nails © {new Date().getFullYear()} All Rights Reserved. Design by
          Viacheslav Onatskyi.
        </FooterRights>
      </FooterRightsWrapper>
    </FooterSection>
  );
};

export default Footer;
