import PropTypes from 'prop-types';

import Icon from '../Icon';

import css from './Review.module.css';

const Review = ({ review }) => {
  const generateIcons = (rating) => {
    const maxRating = 5;
    const icons = [];
    for (let i = 1; i <= maxRating; i++) {
      icons.push(
        <Icon
          key={i}
          iconName="star"
          width="16"
          height="16"
          styles={i <= rating ? css.filledIcon : css.emptyIcon}
        />
      );
    }
    return icons;
  };

  return (
    <li>
      <div className={css.reviewTop}>
        <div className={css.reviewAvatar}>
          <p className={css.name}>{review.reviewer_name[0]}</p>
        </div>
        <div className={css.fullRatingContainer}>
          <p className={css.fullName}>{review.reviewer_name}</p>
          <div className={css.rating}>
            {generateIcons(review.reviewer_rating)}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
