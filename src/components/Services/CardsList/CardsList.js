import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const { id, iconName, heading, shortDescription } = cardItem;
  const [anchorTarget, setAnchorTarget] = useState(null);

  const handleAnchorClick = (id) => {
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    location.hash = '#' + id;
  };

  useEffect(() => {
    setAnchorTarget(document.getElementById(id));
  }, [id]);

  return (
    <CardItemWrapper onClick={() => handleAnchorClick(id)}>
      <CardItem>
        <CardItemImage className="card__item-image">
          <CardItemImageIcon>{renderIcon(iconName)}</CardItemImageIcon>
        </CardItemImage>
        <CardItemHeading>{heading}</CardItemHeading>
        <CardItemDescription>{shortDescription}</CardItemDescription>
      </CardItem>
    </CardItemWrapper>
  );
};

export default CardsList;
