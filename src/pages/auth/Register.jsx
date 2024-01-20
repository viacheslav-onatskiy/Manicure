import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/atoms/Button';
import { PageHeading } from '../../components/common/styles';
import { PAGES } from '../../constants';
import { useAuth } from '../../redux/hooks';
import { SectionHeader } from '../home/styles';
import { AuthButton, AuthContainer, AuthForm, AuthWrapper } from './styles';

const Register = () => {
  const { registerUser, isAuthenticated } = useAuth();
  const { t } = useTranslation();

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
      toast.error(t('toast.passwordDontMatch'));
    } else {
      registerUser({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to={PAGES.HOME} />;
  }

  return (
    <AuthWrapper>
      <PageHeading>{t('register.title')}</PageHeading>

      <AuthContainer className="container">
        <SectionHeader>{t('register.createAccount')}</SectionHeader>

        <AuthForm>
          <Input
            label={t('register.fields.name.label')}
            id="register-name"
            type="text"
            value={name}
            name="name"
            onChange={onChange}
            placeholder={t('register.fields.name.placeholder')}
            autoComplete="off"
          />

          <Input
            label={t('register.fields.email.label')}
            id="register-email"
            type="email"
            value={email}
            name="email"
            onChange={onChange}
            placeholder={t('register.fields.email.placeholder')}
            required
            autoComplete="off"
          />

          <Input
            label={t('register.fields.password.label')}
            id="register-password"
            type="password"
            value={password}
            name="password"
            onChange={onChange}
            placeholder={t('register.fields.password.placeholder')}
            autoComplete="off"
            minLength="6"
          />

          <Input
            label={t('register.fields.password2.label')}
            id="register-password-2"
            type="password"
            value={password2}
            name="password2"
            onChange={onChange}
            placeholder={t('register.fields.password2.placeholder')}
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
              {t('register.registerButton')}
            </Button>
          </AuthButton>

          <p className="auth-redirect-paragraph">
            {t('register.alreadyHaveAnAccount')}?{' '}
            <Link to={PAGES.LOGIN}>
              <Button>{t('register.signIn')}</Button>
            </Link>
          </p>
        </AuthForm>
      </AuthContainer>
    </AuthWrapper>
  );
};

export default Register;
