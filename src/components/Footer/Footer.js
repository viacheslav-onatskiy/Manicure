import { renderIcon } from '../../images/svgIcons';
import { ContactDescription, ContactIcon, ContactLink } from '../../pages/contact/styles';
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
import Button from '../atoms/Button';

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper className="container">
        <FooterLinkList>
          <FooterLink>
            <ContactDescription>
              <ContactLink
                className="footer__link"
                target="_blank"
                href="https://www.google.com/maps/place/3355+North+Rd+%23265,+Burnaby,+BC+V3J+7T9/@49.253893,-122.893541,16z/data=!4m6!3m5!1s0x54867839d8143fd1:0xbdf0efdc7768a81a!8m2!3d49.2538925!4d-122.893541!16s%2Fg%2F11kqc223mh?hl=ru&entry=ttu"
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
                href="mailto:email@example.com"
                rel="noreferrer"
                title="My Facebook link"
              >
                {renderIcon('facebook')}
              </ContactLink>
            </ContactDescription>
            <ContactDescription>
              <ContactLink
                className="footer__link"
                target="_blank"
                href="mailto:email@example.com"
                rel="noreferrer"
                title="Text me a message"
              >
                {renderIcon('contactEmail')}
              </ContactLink>
            </ContactDescription>
          </FooterIconsLinkList>

          <FooterLink>
            <ContactDescription>
              <ContactLink
                href="tel:+1672-272-14-17"
                title="Call me"
                className="footer__link"
              >
                <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
                Call me: +1-672-272-14-17
              </ContactLink>
            </ContactDescription>
          </FooterLink>
        </FooterLinkList>

        <FooterLine />

        <FooterNavList>
          <FooterNavLink to="/">
            <Button>HOME</Button>
          </FooterNavLink>
          <FooterNavLink to="/about">
            <Button>ABOUT</Button>
          </FooterNavLink>
          <FooterNavLink to="/portfolio">
            <Button>PORTFOLIO</Button>
          </FooterNavLink>
          <FooterNavLink to="/reviews">
            <Button>REVIEWS</Button>
          </FooterNavLink>
          <FooterNavLink to="/services">
            <Button>SERVICES</Button>
          </FooterNavLink>
          <FooterNavLink to="/contact">
            <Button>CONTACT</Button>
          </FooterNavLink>
        </FooterNavList>
      </FooterWrapper>
      <FooterRightsWrapper>
        <FooterRights className="container">
          Yana Nails © 2023 All Rights Reserved. Design by Viacheslav Onatskyi.
        </FooterRights>
      </FooterRightsWrapper>
    </FooterSection>
  );
};

export default Footer;
