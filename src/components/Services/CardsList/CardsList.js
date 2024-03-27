import { motion } from 'framer-motion';
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
      <motion.div
        whileInView={{ x: [-300, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: (Math.floor(Math.random() * 10) + 1) / 10 }}
      >
        <CardItem>
          <CardItemImage className="card__item-image">
            <CardItemImageIcon>{renderIcon(iconName)}</CardItemImageIcon>
          </CardItemImage>
          <CardItemHeading>{heading}</CardItemHeading>
          <CardItemDescription>{shortDescription}</CardItemDescription>
        </CardItem>
      </motion.div>
    </CardItemWrapper>
  );
};

export default CardsList;
