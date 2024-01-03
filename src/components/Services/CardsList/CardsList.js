import { renderIcon } from '../../../images/svgIcons';
import {
  CardItem,
  CardItemDescription,
  CardItemHeading,
  CardItemImage,
  CardItemImageIcon,
  CardItemWrapper,
  CardsListWrapper
} from './styles';

const CardsList = ({ items = [] }) => {
  return (
    <CardsListWrapper className="container">
      {items.map((item, i) => (
        <CardItemComponent key={`${item.iconName}-${i}`} cardItem={item} />
      ))}
    </CardsListWrapper>
  );
};

const CardItemComponent = ({ cardItem }) => {
  const { iconName, heading, description } = cardItem;

  return (
    <CardItemWrapper>
      <CardItem>
        <CardItemImage className="card__item-image">
          <CardItemImageIcon>{renderIcon(iconName)}</CardItemImageIcon>
        </CardItemImage>
        <CardItemHeading>{heading}</CardItemHeading>
        <CardItemDescription>{description}</CardItemDescription>
      </CardItem>
    </CardItemWrapper>
  );
};

export default CardsList;
