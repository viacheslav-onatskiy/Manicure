import { useEffect, useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { Link, useNavigate } from 'react-router-dom';
import { SectionHeader } from '../home/styles';
import { PageHeading } from '../../components/common/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';
import Input from '../../components/Input';
import Button from '../../components/atoms/Button';

const Login = () => {
  const { loginUser, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <AuthWrapper>
      <PageHeading>Login</PageHeading>

      <AuthContainer className="container">
        <SectionHeader>Sign Into Your Account</SectionHeader>
        <AuthForm>
          <Input
            label="Email"
            id="login-email"
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
            id="login-password"
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder="Enter your password"
            autoComplete="off"
            minLength="6"
          />

          <AuthButton>
            <Button
              variant="primary"
              onClick={onSubmit}
              size="large"
              type="submit"
              id="user-login-button"
            >
              Login
            </Button>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            Don't have an account?{' '}
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Login;
