import { useMemo, useState } from 'react';
import { RatingIconWrapper, StarRatingWrapper } from './styles';
import StarIcon from './StarIcon';

export const StarRating = ({ rating = 4, onSaveRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (value) => {
    setHoverRating(value);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <StarRatingWrapper>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon
            key={index}
            index={index}
            rating={rating}
            hoverRating={hoverRating}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onSaveRating={onSaveRating}
          />
        );
      })}
    </StarRatingWrapper>
  );
};

function RatingIcon({
  index,
  rating,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating
}) {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return '#fd4d99';
    } else if (!hoverRating && rating >= index) {
      return '#fd4d99';
    }
    return 'none';
  }, [rating, hoverRating, index]);

  return (
    <RatingIconWrapper
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </RatingIconWrapper>
  );
}
