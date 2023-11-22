import { useState } from 'react';
import { ServiceFormItem, ServiceFromWrapper } from './styles';
import axios from 'axios';
import { MyButton } from '../../../pages/home/styles';
import Input from '../../Input';
import { toast } from 'react-toastify';
import Textarea from '../../Textarea';

const ServiceForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    review: ''
  });

  const sendEmail = (event) => {
    event.preventDefault();

    axios
      .post('/send', { ...inputs })
      .then((response) => {
        toast.success('Email data: ', response.data);
        setInputs({ name: '', email: '', phoneNumber: '', review: '' });
      })
      .catch(() => {
        toast.warning('Something went wrong. Try again later!');
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setInputs((values) => ({ ...values, [id]: value }));
  };

  return (
    <>
      <ServiceFromWrapper onSubmit={sendEmail}>
        <ServiceFormItem>
          <Input
            id="name"
            name="name"
            label="Enter your name:"
            placeholder="Name"
            value={inputs.name || ''}
            onChange={handleChange}
          />
        </ServiceFormItem>{' '}
        <ServiceFormItem>
          <Input
            id="email"
            name="email"
            label="Enter your email:"
            placeholder="Email"
            value={inputs.email || ''}
            onChange={handleChange}
          />
        </ServiceFormItem>
        <ServiceFormItem>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            label="Enter your phone number:"
            placeholder="Phone number"
            value={inputs.phoneNumber || ''}
            onChange={handleChange}
          />
        </ServiceFormItem>
        <ServiceFormItem>
          <Textarea
            id="review"
            name="review"
            label="Enter your review:"
            placeholder="Review"
            value={inputs.review || ''}
            onChange={handleChange}
          />
        </ServiceFormItem>
        <MyButton variant="primary" bg="#fd4d99" onClick={sendEmail} type="submit">
          Связаться
        </MyButton>
      </ServiceFromWrapper>
    </>
  );
};

export default ServiceForm;
