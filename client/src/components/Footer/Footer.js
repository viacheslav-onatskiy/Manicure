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

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper className="container">
        <FooterLinkList>
          <FooterLink>
            <ContactDescription>
              <ContactIcon>{renderIcon('contactAddress')}</ContactIcon>
              <ContactLink
                target="_blank"
                href="https://www.google.com/maps/place/3355+North+Rd+%23265,+Burnaby,+BC+V3J+7T9/@49.253893,-122.893541,16z/data=!4m6!3m5!1s0x54867839d8143fd1:0xbdf0efdc7768a81a!8m2!3d49.2538925!4d-122.893541!16s%2Fg%2F11kqc223mh?hl=ru&entry=ttu"
                rel="noreferrer"
              >
                Our Location on Google Map
              </ContactLink>
            </ContactDescription>
          </FooterLink>

          <FooterIconsLinkList>
            <ContactDescription>
              <ContactLink
                target="_blank"
                href="mailto:email@example.com"
                rel="noreferrer"
              >
                {renderIcon('facebook')}
              </ContactLink>
            </ContactDescription>
            <ContactDescription>
              <ContactLink
                target="_blank"
                href="mailto:email@example.com"
                rel="noreferrer"
              >
                {renderIcon('contactEmail')}
              </ContactLink>
            </ContactDescription>
          </FooterIconsLinkList>

          <FooterLink>
            <ContactDescription>
              <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
              <ContactLink href="tel:+1672-272-14-17">
                Call me: +1-672-272-14-17
              </ContactLink>
            </ContactDescription>
          </FooterLink>
        </FooterLinkList>

        <FooterLine />

        <FooterNavList>
          <FooterNavLink to="/">HOME</FooterNavLink>
          <FooterNavLink to="/about">ABOUT</FooterNavLink>
          <FooterNavLink to="/portfolio">PORTFOLIO</FooterNavLink>
          <FooterNavLink to="/reviews">REVIEWS</FooterNavLink>
          <FooterNavLink to="/services">SERVICES</FooterNavLink>
          <FooterNavLink to="/contact">CONTACT</FooterNavLink>
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
