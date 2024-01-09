import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import { SectionHeader } from '../home/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';
import { PageHeading } from '../../components/common/styles';
import Input from '../../components/Input';
import Button from '../../components/atoms/Button';
import { PAGES } from '../../constants';

const Register = () => {
  const { registerUser, isAuthenticated } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error('Passwords do not match');
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to={PAGES.HOME} />;
  }

  return (
    <AuthWrapper>
      <PageHeading>Sign Up</PageHeading>

      <AuthContainer className="container">
        <SectionHeader>Create Your Account</SectionHeader>

        <AuthForm>
          <Input
            label="Name"
            id="register-name"
            type="text"
            value={name}
            name="name"
            onChange={onChange}
            placeholder="Enter your name"
            autoComplete="off"
          />

          <Input
            label="Email"
            id="register-email"
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder="Email Address"
            required
            autoComplete="off"
          />

          <Input
            label="Password"
            id="register-password"
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="Create a password"
            autoComplete="off"
            minLength="6"
          />

          <Input
            label="Password"
            id="register-password-2"
            type="password"
            value={password2}
            name="password2"
            onChange={onChange}
            placeholder="Confirm Password"
            autoComplete="off"
            minLength="6"
          />

          <AuthButton>
            <Button
              variant="primary"
              onClick={onSubmit}
              size="large"
              type="submit"
              id="user-register-button"
            >
              Register
            </Button>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            Already have an account?{' '}
            <Link to={PAGES.LOGIN}>
              <Button>Sign In</Button>
            </Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Register;
