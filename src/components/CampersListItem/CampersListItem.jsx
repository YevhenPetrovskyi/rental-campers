import PropTypes from 'prop-types';

import CamperDescription from '../CamperDescription/CamperDescription';

import css from './CampersListItem.module.css';

const CampersListItem = ({ camper }) => {
  return (
    <li className={css.campersListItem}>
      <div className={css.imageContainer}>
        <img
          className={css.img}
          src={camper.gallery[0]}
          alt={camper.name}
          width="300"
          height="300"
        />
      </div>
      <CamperDescription camper={camper} />
    </li>
  );
};

CampersListItem.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default CampersListItem;
