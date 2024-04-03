import { motion } from 'framer-motion';
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
              // allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </ServiceSectionItem>

          <ServiceSectionItem>
            <ContactList>
              <ContactListItem>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <SectionHeading>{t('contact.contactList.address')}</SectionHeading>
                </motion.div>

                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
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
                </motion.div>
              </ContactListItem>

              <ContactListItem>
                <motion.div
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <SectionHeading>{t('contact.contactList.phone')}</SectionHeading>
                </motion.div>

                <motion.div
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <ContactDescription>
                    <ContactLink href={`tel:${REDIRECTS.PHONE_NUMBER}`} title="Call me">
                      <ContactIcon>{renderIcon('contactPhone')}</ContactIcon>
                      +1-672-272-14-17
                    </ContactLink>
                  </ContactDescription>
                </motion.div>
              </ContactListItem>

              <ContactListItem>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <SectionHeading>E-mail</SectionHeading>
                </motion.div>
                <motion.div
                  whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <ContactDescription>
                    <ContactLink
                      href={`mailto:${REDIRECTS.GMAIL}`}
                      title="Text me a message"
                    >
                      <ContactIcon>{renderIcon('contactEmail')}</ContactIcon>
                      {REDIRECTS.GMAIL}
                    </ContactLink>
                  </ContactDescription>
                </motion.div>
              </ContactListItem>

              <ContactListItem>
                <motion.div
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
                  <SectionHeading>{t('contact.contactList.openingHours')}</SectionHeading>
                </motion.div>
                <motion.div
                  whileInView={{ x: [100, 0], opacity: [0, 1] }}
                  transition={{
                    duration: 0.5,
                    delay: (Math.floor(Math.random() * 10) + 1) / 10
                  }}
                >
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
                </motion.div>
              </ContactListItem>
            </ContactList>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>
    </ContactWrapper>
  );
};

export default Contact;
