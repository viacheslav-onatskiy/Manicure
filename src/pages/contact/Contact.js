import { useTranslation } from 'react-i18next';
import ServiceForm from '../../components/Services/ServiceForm/ServiceForm';
import {
  SectionContainer,
  SectionHeading,
  ServiceSection,
  ServiceSectionItem
} from '../../components/Services/styles';
import { PageHeading } from '../../components/common/styles';
import { REDIRECTS } from '../../constants.js';
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
  const { t } = useTranslation();

  return (
    <ContactWrapper>
      <PageHeading>{t('pages.contact')}</PageHeading>

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
                <SectionHeading>{t('contact.contactList.address')}</SectionHeading>
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
                <SectionHeading>{t('contact.contactList.phone')}</SectionHeading>
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
                <SectionHeading>{t('contact.contactList.openingHours')}</SectionHeading>
                <ContactDescription>
                  <ContactLink className="contact-hours">
                    <ContactIcon>{renderIcon('contactClock')}</ContactIcon>
                    <div>
                      <p>
                        {t('contact.contactList.monSat')}:{' '}
                        {t('contact.contactList.openTime')}
                      </p>
                      <p>
                        {t('contact.contactList.sunday')}:{' '}
                        {t('contact.contactList.closed')}
                      </p>
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
