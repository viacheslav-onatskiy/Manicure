import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import { Heading1, Heading2, Heading4 } from '../../components/common/styles';
import { PAGES } from '../../constants';
import { NotFoundWrapper } from './styles';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NotFoundWrapper className="container">
      <Heading2 className="notFound-heading">{t('notFoundPage.title')}</Heading2>
      <Heading1 className="notFound-error">404</Heading1>
      <Heading4 className="notFound-description">
        {t('notFoundPage.description')}
      </Heading4>
      <Link to={PAGES.HOME}>
        <Button className="notFound-button" formType="rounded2" variant="primary">
          {t('notFoundPage.button')}
        </Button>
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
