import { useTranslation } from 'react-i18next';
import ImageGallery from '../../components/ImageGallery';
import { PageHeading } from '../../components/common/styles';
import { PortfolioHeading } from './styles';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeading>{t('pages.portfolio')}</PageHeading>
      <div className="container">
        <PortfolioHeading>{t('portfolio.description')}</PortfolioHeading>
      </div>

      <ImageGallery />
    </>
  );
};

export default Portfolio;
