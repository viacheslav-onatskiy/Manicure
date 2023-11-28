import ImageGallery from '../../components/ImageGallery';
import { PageHeading } from '../../components/common/styles';
import { PortfolioHeading } from './styles';

const Portfolio = () => {
  return (
    <div>
      <PageHeading>Portfolio</PageHeading>
      <PortfolioHeading className="container">
        За 7 лет работы я сделала более 1500 маникюров. Вот лишь некоторые из них.
      </PortfolioHeading>

      <ImageGallery />
    </div>
  );
};

export default Portfolio;
