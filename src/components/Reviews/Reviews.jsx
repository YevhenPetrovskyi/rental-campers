import PropTypes from 'prop-types';

import BookForm from '../BookForm/BookForm';
import Review from '../Review/Review';

import css from './Reviews.module.css';

const Reviews = ({ camper }) => {
  return (
    <div>
      <div className={css.container}>
        <ul className={css.revList}>
          {camper.reviews.map((review, index) => (
            <Review key={index} review={review} />
          ))}
        </ul>
        <BookForm />
      </div>
    </div>
  );
};

Reviews.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default Reviews;
