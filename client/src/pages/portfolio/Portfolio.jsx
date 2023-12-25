import ImageGallery from '../../components/ImageGallery';
import { PageHeading } from '../../components/common/styles';
import { PortfolioHeading } from './styles';

const Portfolio = () => {
  return (
    <>
      <PageHeading>Portfolio</PageHeading>
      <div className="container">
        <PortfolioHeading>
          За 7 лет работы я сделала более 1500 маникюров. Вот лишь некоторые из них.
        </PortfolioHeading>
      </div>

      <ImageGallery />
    </>
  );
};

export default Portfolio;
