import { useMemo, useState } from 'react';
import { RatingIconWrapper, StarRatingWrapper } from './styles';
import StarIcon from './StarIcon';

export const StarRating = ({
  rating = 4,
  onSaveRating = () => {},
  isEditable = true,
  className = null
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (value) => {
    setHoverRating(value);
  };

  const onMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <StarRatingWrapper className={className}>
      {[1, 2, 3, 4, 5].map((index) => {
        return (
          <RatingIcon
            key={index}
            index={index}
            rating={rating}
            isEditable={isEditable}
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
  isEditable,
  hoverRating,
  onMouseEnter,
  onMouseLeave,
  onSaveRating
}) {
  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return '#d8babc';
    } else if (!hoverRating && rating >= index) {
      return '#d8babc';
    }
    return 'none';
  }, [rating, hoverRating, index]);

  if (!isEditable) {
    return <StarIcon fill={fill} />;
  }

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
