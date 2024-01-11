import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';
import { Heading1, Heading2, Heading4 } from '../../components/common/styles';
import { PAGES } from '../../constants';
import { NotFoundWrapper } from './styles';

const NotFound = () => {
  return (
    <NotFoundWrapper className="container">
      <Heading2 className="notFound-heading">Page Not Found</Heading2>
      <Heading1 className="notFound-error">404</Heading1>
      <Heading4 className="notFound-description">
        The Requested page couldn't be found - this could be due to a spelling error in
        the URL or a removed page.
      </Heading4>
      <Link to={PAGES.HOME}>
        <Button className="notFound-button" formType="rounded2" variant="primary">
          BACK TO HOME PAGE
        </Button>
      </Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
