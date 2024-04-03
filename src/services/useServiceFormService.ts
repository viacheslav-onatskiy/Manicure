import { ChangeEvent, FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { REG_EXP } from '../constants';
import axiosInstance from '../helpers/axios';

interface ServiceFormValues {
  name: string;
  email: string;
  phoneNumber: string;
  review: string;
}

const useServiceFormService = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [review, setReview] = useState('');
  const [isNameError, setIsNameError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [isReviewError, setIsReviewError] = useState(false);
  const [isTouchedForm, setIsTouchedForm] = useState(false);

  const validateName = (name: string) => {
    return name.length >= 3;
  };

  const validateEmail = (email: string) => {
    return REG_EXP.VALIDATE_EMAIL.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const containsAtLeastNineDigits = /(?:\D*\d){9}/.test(phoneNumber);

    return containsAtLeastNineDigits;
  };

  const validateReview = (reviewToValidate: string) => {
    return reviewToValidate.length >= 10;
  };

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsTouchedForm(true);

    if (!validateName(e.target.value)) {
      setIsNameError(true);
    } else {
      setIsNameError(false);
    }
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setIsTouchedForm(true);

    if (!validateEmail(e.target.value)) {
      setIsEmailError(true);
    } else {
      setIsEmailError(false);
    }
  };

  const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
    setIsTouchedForm(true);

    if (!validatePhoneNumber(e.target.value)) {
      setIsPhoneNumberError(true);
    } else {
      setIsPhoneNumberError(false);
    }
  };

  const onChangeReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
    setIsTouchedForm(true);

    if (!validateReview(e.target.value)) {
      setIsReviewError(true);
    } else {
      setIsReviewError(false);
    }
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
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

    const formValues: ServiceFormValues = { name, email, phoneNumber, review };

    axiosInstance
      .post('/send', { ...formValues })
      .then((response) => {
        toast.success('Your message was sent successfully');
      })
      .catch(() => {
        toast.warning('Something went wrong. Try again later!');
      });
  };

  return {
    name,
    email,
    phoneNumber,
    review,
    isNameError,
    isEmailError,
    isPhoneNumberError,
    isReviewError,
    isTouchedForm,
    onChangeName,
    onChangeEmail,
    onChangePhoneNumber,
    onChangeReview,
    submitForm
  };
};

export default useServiceFormService;
