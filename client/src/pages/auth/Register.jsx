import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { toast } from 'react-toastify';
import { Link, Navigate } from 'react-router-dom';
import { SectionHeader } from '../home/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';
import { MyButton, PageHeading } from '../../components/common/styles';
import Input from '../../components/Input';

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
    return <Navigate to="/" />;
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
            onChange={(e) => onChange(e)}
            placeholder="Enter your name"
            autoComplete="off"
          />

          <Input
            label="Email"
            id="register-email"
            type="email"
            value={email}
            name="email"
            onChange={(e) => onChange(e)}
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
            onChange={(e) => onChange(e)}
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
            onChange={(e) => onChange(e)}
            placeholder="Confirm Password"
            autoComplete="off"
            minLength="6"
          />

          <AuthButton>
            <MyButton
              variant="primary"
              text="Register"
              onClick={(e) => onSubmit(e)}
              color="white"
              type="submit"
              className="auth-button"
              id="user-register-button"
            >
              Register
            </MyButton>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Register;
