import { useTranslation } from 'react-i18next';
import { useServiceFormService } from '../../../services';
import Input from '../../Input';
import Textarea from '../../Textarea';
import Button from '../../atoms/Button';
import {
  SectionButtonContainer,
  SectionContainer,
  SectionDescription,
  SectionHeading,
  ServiceSection,
  ServiceSectionItem
} from '../styles';
import { ServiceFormItem, ServiceFromWrapper } from './styles';

const ServiceForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    name,
    email,
    phoneNumber,
    review,
    onChangeName,
    onChangeEmail,
    onChangePhoneNumber,
    onChangeReview,
    isNameError,
    isEmailError,
    isPhoneNumberError,
    isReviewError,
    isTouchedForm,
    submitForm
  } = useServiceFormService();

  return (
    <>
      <SectionContainer $bgColor="#f1f2b4" color="#001515">
        <ServiceSection className="container">
          <ServiceSectionItem>
            <SectionHeading>{t('contact.contactMe')}</SectionHeading>
            <SectionDescription>{t('contact.contactMeDescription')}</SectionDescription>
            <SectionButtonContainer>
              <Button variant="outlined" size="large" formType="rounded2">
                {t('common.makeAnAppointment')}
              </Button>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceFromWrapper onSubmit={submitForm}>
              <ServiceFormItem>
                <Input
                  id="name"
                  name="name"
                  // label="Enter your name:"
                  placeholder={t('contact.contactForm.name')}
                  value={name}
                  onChange={onChangeName}
                  iconType="userName"
                  required
                  error={isNameError}
                />
              </ServiceFormItem>
              <ServiceFormItem>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  // label="Enter your email:"
                  placeholder={t('contact.contactForm.email')}
                  value={email}
                  onChange={onChangeEmail}
                  iconType="contactEmail"
                  error={isEmailError}
                />
              </ServiceFormItem>
              <ServiceFormItem>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  // label="Enter your phone number:"
                  placeholder={t('contact.contactForm.phoneNumber')}
                  value={phoneNumber}
                  onChange={onChangePhoneNumber}
                  iconType="contactPhone"
                  error={isPhoneNumberError}
                />
              </ServiceFormItem>
              <ServiceFormItem>
                <Textarea
                  id="review"
                  name="review"
                  // label="Enter your review:"
                  placeholder={t('contact.contactForm.review')}
                  value={review}
                  onChange={onChangeReview}
                  iconType="message"
                  error={isReviewError}
                />
              </ServiceFormItem>

              <Button
                className="fullWidth"
                variant="primary"
                size="large"
                formType="rounded1"
                disabled={!isTouchedForm}
              >
                {t('contact.contactMe')}!
              </Button>
            </ServiceFromWrapper>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>
    </>
  );
};

export default ServiceForm;
