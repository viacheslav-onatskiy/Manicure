import { useState } from 'react';
import { useAuth } from '../../redux/hooks';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../home/styles';
import { MyButton, PageHeading } from '../../components/common/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';
import Input from '../../components/Input';

const Login = () => {
  const { loginUser, isAuthenticated } = useAuth();

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

  if (isAuthenticated) {
    return <Link to="/" />;
  }

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
            onChange={(e) => onChange(e)}
            placeholder="Enter your password"
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
              id="user-login-button"
            >
              Login
            </MyButton>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Login;
