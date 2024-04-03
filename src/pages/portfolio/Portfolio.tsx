import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ImageGallery from '../../components/ImageGallery';
import { PageHeading } from '../../components/common/styles';
import { PortfolioHeading } from './styles';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageHeading>{t('pages.portfolio')}</PageHeading>
      <motion.div
        whileInView={{ y: [-200, 0], opacity: [0.35, 1] }}
        transition={{ duration: 0.5 }}
        className="container"
      >
        <PortfolioHeading>{t('portfolio.description')}</PortfolioHeading>
      </motion.div>

      <ImageGallery />
    </>
  );
};

export default Portfolio;
