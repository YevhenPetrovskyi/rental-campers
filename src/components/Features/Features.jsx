import PropTypes from 'prop-types';

import BookForm from '../BookForm/BookForm';
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';

import css from './Features.module.css';

const Features = ({ camper }) => {
  return (
    <div className={css.container}>
      <FeaturesDetails camper={camper} />
      <BookForm />
    </div>
  );
};

Features.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default Features;
