import { useState } from 'react';
import { ServiceFormItem, ServiceFromWrapper } from './styles';
import axiosInstance from '../../../helpers/axios';
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
import Button from '../../atoms/Button';

const ServiceForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    review: ''
  });

  const sendEmail = (event) => {
    event.preventDefault();

    axiosInstance
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
      <SectionContainer $bgColor="#f1f2b4" color="#001515">
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
              <Button variant="outlined" size="large" formType="rounded2">
                Make an appointment!
              </Button>
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
              </ServiceFormItem>
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

              <Button
                className="fullWidth"
                variant="primary"
                size="large"
                formType="rounded1"
              >
                Contact me!
              </Button>
            </ServiceFromWrapper>
          </ServiceSectionItem>
        </ServiceSection>
      </SectionContainer>
    </>
  );
};

export default ServiceForm;
