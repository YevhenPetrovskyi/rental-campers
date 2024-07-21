import PropTypes from 'prop-types';

import Icon from '../Icon';

import css from './CamperDetails.module.css';

const CamperDetails = ({ camper }) => {
  const {
    adults,
    transmission,
    engine,
    details: { kitchen, beds, freezer },
  } = camper;
  return (
    <ul className={css.detailsContainer}>
      {adults > 0 && (
        <li className={css.detailWrapper}>
          <Icon
            iconName="users"
            width="20"
            height="20"
            styles={css.iconUsers}
          />
          <p className={css.text}>{adults} adults</p>
        </li>
      )}
      {transmission && (
        <li className={css.detailWrapper}>
          <Icon
            iconName="automatic"
            width="20"
            height="20"
            styles={css.iconAutomatic}
          />
          <p className={css.text}>
            {transmission === 'automatic' ? 'Automatic' : transmission}
          </p>
        </li>
      )}
      {engine && (
        <li className={css.detailWrapper}>
          <Icon iconName="petrol" width="20" height="20" />
          <p className={css.text}>
            {engine === 'petrol' ? 'Petrol' : transmission}
          </p>
        </li>
      )}
      {kitchen > 0 && (
        <li className={css.detailWrapper}>
          <Icon
            iconName="eat"
            width="20"
            height="20"
            styles={css.iconKitchen}
          />
          <p className={css.text}>Kitchen</p>
        </li>
      )}
      {beds > 0 && (
        <li className={css.detailWrapper}>
          <Icon iconName="bed" width="20" height="20" styles={css.iconBed} />
          <p className={css.text}>
            {beds} {beds > 1 ? 'beds' : 'bed'}
          </p>
        </li>
      )}
      {freezer > 0 && (
        <li className={css.detailWrapper}>
          <Icon iconName="wind" width="20" height="20" styles={css.iconWind} />
          <p className={css.text}>AC</p>
        </li>
      )}
    </ul>
  );
};

CamperDetails.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default CamperDetails;
