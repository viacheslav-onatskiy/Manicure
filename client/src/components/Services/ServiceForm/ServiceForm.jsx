import { useState } from 'react';
import { ServiceFormItem, ServiceFromWrapper } from './styles';
import axios from 'axios';
import Input from '../../Input';
import { toast } from 'react-toastify';
import Textarea from '../../Textarea';
import {
  SectionButtonContainer,
  SectionDescription,
  SectionHeading,
  ServiceSection,
  SectionContainer,
  ServiceSectionItem
} from '../styles';
import { MyButton } from '../../common/styles';

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
      <SectionContainer bgColor="#f1f2b4" color="#001515">
        <ServiceSection className="container">
          <ServiceSectionItem>
            <SectionHeading>Contact me</SectionHeading>
            <SectionDescription>
              You can contact me in any way convenient for you. I am available 24/7 by
              email.
              <br />
              You can also use the quick contact form and I will contact you within 24
              hours or visit our salon in person.
            </SectionDescription>
            <SectionButtonContainer>
              <MyButton color="#001515" rounded>
                Записаться!
              </MyButton>
            </SectionButtonContainer>
          </ServiceSectionItem>
          <ServiceSectionItem>
            <ServiceFromWrapper onSubmit={sendEmail}>
              <ServiceFormItem>
                <Input
                  id="name"
                  name="name"
                  // label="Enter your name:"
                  placeholder="Name"
                  value={inputs.name || ''}
                  onChange={handleChange}
                  iconType="userName"
                />
              </ServiceFormItem>{' '}
              <ServiceFormItem>
                <Input
                  id="email"
                  name="email"
                  // label="Enter your email:"
                  placeholder="Email"
                  value={inputs.email || ''}
                  onChange={handleChange}
                  iconType="contactEmail"
                />
              </ServiceFormItem>
              <ServiceFormItem>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  // label="Enter your phone number:"
                  placeholder="Phone number"
                  value={inputs.phoneNumber || ''}
                  onChange={handleChange}
                  iconType="contactPhone"
                />
              </ServiceFormItem>
              <ServiceFormItem>
                <Textarea
                  id="review"
                  name="review"
                  // label="Enter your review:"
                  placeholder="Review"
                  value={inputs.review || ''}
                  onChange={handleChange}
                  iconType="message"
                />
              </ServiceFormItem>
              <MyButton variant="primary" bg="#fd4d99" onClick={sendEmail} type="submit">
                Contact
              </MyButton>
            </ServiceFromWrapper>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>
    </>
  );
};

export default ServiceForm;
