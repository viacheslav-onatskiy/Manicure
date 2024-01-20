import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/atoms/Button';
import { PageHeading } from '../../components/common/styles';
import { PAGES } from '../../constants';
import { useAuth } from '../../redux/hooks';
import { SectionHeader } from '../home/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';

const Login = () => {
  const { loginUser, isAuthenticated } = useAuth();
  const { t } = useTranslation();
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
      <PageHeading>{t('login.title')}</PageHeading>

      <AuthContainer className="container">
        <SectionHeader>{t('login.header')}</SectionHeader>
        <AuthForm>
          <Input
            label={t('login.fields.email.label')}
            id="login-email"
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder={t('login.fields.email.placeholder')}
            required
            autoComplete="off"
          />

          <Input
            label={t('login.fields.password.label')}
            id="login-password"
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder={t('login.fields.password.placeholder')}
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
              {t('login.loginButton')}
            </Button>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            {t('login.noAccount')}?{' '}
            <Link to={PAGES.REGISTER}>
              <Button>{t('login.signUp')}</Button>
            </Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Login;
