import ServiceForm from '../../components/Services/ServiceForm/ServiceForm';
import {
  SectionHeading,
  ServiceSection,
  SectionContainer,
  ServiceSectionItem
} from '../../components/Services/styles';
import { PageHeading } from '../../components/common/styles';
import { renderIcon } from '../../images/svgIcons';
import { REDIRECTS } from '../../constants.js';
import {
  ContactDescription,
  ContactIcon,
  ContactLink,
  ContactList,
  ContactListItem,
  ContactWrapper
} from './styles';

const Contact = () => {
  return (
    <ContactWrapper>
      <PageHeading>Contact</PageHeading>

      <ServiceForm />

      <SectionContainer $bgColor="#bef1f1">
        <ServiceSection className="container">
          <ServiceSectionItem>
            <iframe
              title="google-link-address"
              src={REDIRECTS.GOOGLE_MAP_IFRAME}
              max-width="500"
              max-height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ServiceSectionItem>

          <ServiceSectionItem>
            <ContactList>
              <ContactListItem>
                <SectionHeading>Address</SectionHeading>
                <ContactDescription>
                  <ContactLink
                    title="Find me"
                    target="_blank"
                    href={REDIRECTS.GOOGLE_MAP}
                    rel="noreferrer"
                  >
                    <ContactIcon>{renderIcon('contactAddress')}</ContactIcon>
                    3355 North Rd #265 Burnaby, BC V3J 7T9
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>

              <ContactListItem>
                <SectionHeading>Phone</SectionHeading>
                <ContactDescription>
                  <ContactLink href={`tel:${REDIRECTS.PHONE_NUMBER}`} title="Call me">
                    <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
                    +1-672-272-14-17
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>

              <ContactListItem>
                <SectionHeading>E-mail</SectionHeading>
                <ContactDescription>
                  <ContactLink
                    href={`mailto:${REDIRECTS.GMAIL}`}
                    title="Text me a message"
                  >
                    <ContactIcon>{renderIcon('contactEmail')}</ContactIcon>
                    {REDIRECTS.GMAIL}
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>

              <ContactListItem>
                <SectionHeading>Opening Hours</SectionHeading>
                <ContactDescription>
                  <ContactLink className="contact-hours">
                    <ContactIcon>{renderIcon('contactClock')}</ContactIcon>
                    <div>
                      <p>Mon-Sat: 9am - 5pm</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>
            </ContactList>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>
    </ContactWrapper>
  );
};

export default Contact;
