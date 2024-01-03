import ServiceForm from '../../components/Services/ServiceForm/ServiceForm';
import {
  SectionHeading,
  ServiceSection,
  SectionContainer,
  ServiceSectionItem
} from '../../components/Services/styles';
import { PageHeading } from '../../components/common/styles';
import { renderIcon } from '../../images/svgIcons';
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.187287362003!2d-122.89611592381398!3d49.25389597279259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867839d8143fd1%3A0xbdf0efdc7768a81a!2s3355%20North%20Rd%20%23265%2C%20Burnaby%2C%20BC%20V3J%207T9!5e0!3m2!1sru!2sca!4v1698983306869!5m2!1sru!2sca"
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
                    title="Open map"
                    target="_blank"
                    href="https://www.google.com/maps/place/3355+North+Rd+%23265,+Burnaby,+BC+V3J+7T9/@49.253893,-122.893541,16z/data=!4m6!3m5!1s0x54867839d8143fd1:0xbdf0efdc7768a81a!8m2!3d49.2538925!4d-122.893541!16s%2Fg%2F11kqc223mh?hl=ru&entry=ttu"
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
                  <ContactLink href="tel:+1672-272-14-17" title="Call me">
                    <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
                    +1-672-272-14-17
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>

              <ContactListItem>
                <SectionHeading>E-mail</SectionHeading>
                <ContactDescription>
                  <ContactLink href="mailto:email@example.com" title="Text me a message">
                    <ContactIcon>{renderIcon('contactEmail')}</ContactIcon>
                    email@example.com
                  </ContactLink>
                </ContactDescription>
              </ContactListItem>

              <ContactListItem>
                <SectionHeading>Opening Hours</SectionHeading>
                <ContactDescription>
                  <ContactLink className="contact-hours">
                    <ContactIcon>{renderIcon('contactClock')}</ContactIcon>
                    <p>Mon-Sat: 9am - 5pm</p>
                    <p>Sunday: Closed</p>
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
