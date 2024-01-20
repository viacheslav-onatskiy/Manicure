import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import axiosInstance from '../../../helpers/axios';
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

const ServiceForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [review, setReview] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isReviewError, setIsReviewError] = useState(false);
  const [isTouchedForm, setIsTouchedForm] = useState(false);

  const validateName = (name) => {
    return name.length >= 3;
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatePhoneNumber = (string) => {
    const containsAtLeastNineDigits = /(?:\D*\d){9}/.test(string);

    return containsAtLeastNineDigits;
  };

  const validateReview = (string) => {
    return string.length >= 10;
  };

  const onChangeName = (e) => {
    setName(e.target.value);
    setIsTouchedForm(true);

    if (!validateName(e.target.value)) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setIsTouchedForm(true);

    if (!validateEmail(e.target.value)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    setIsTouchedForm(true);

    if (!validatePhoneNumber(e.target.value)) {
      setIsPhoneNumberError(true);
    } else {
      setIsPhoneNumberError(false);
    }
  };

  const onChangeReview = (e) => {
    setReview(e.target.value);
    setIsTouchedForm(true);

    if (!validateReview(e.target.value)) {
      setIsReviewError(true);
    } else {
      setIsReviewError(false);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    const validationErrors = [];

    if (isNameError) {
      validationErrors.push('Name should be at least 3 characters long.');
    }

    if (isEmailError) {
      validationErrors.push('Invalid email address.');
    }

    if (isPhoneNumberError) {
      validationErrors.push('Invalid phone number.');
    }

    if (isReviewError) {
      validationErrors.push('Review should be at least 10 characters long.');
    }

    if (validationErrors.length > 0) {
      toast.warn('- ' + validationErrors.join('\n- '), {
        bodyClassName: 'toast-errors'
      });
      return;
    }

    const formValues = { name, email, phoneNumber, review };

    axiosInstance
      .post('/send', { ...formValues })
      .then((response) => {
        toast.success('Your message was sent successfully');
      })
      .catch(() => {
        toast.warning('Something went wrong. Try again later!');
      });
  };

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
