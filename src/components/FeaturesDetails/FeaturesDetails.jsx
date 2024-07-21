import PropTypes from 'prop-types';
import Icon from '../Icon';

import css from './FeaturesDetails.module.css';

const FeaturesDetails = ({ camper }) => {
  const {
    adults,
    transmission,
    engine,
    form,
    height,
    length,
    width,
    tank,
    consumption,
    details: { kitchen, beds, airConditioner, freezer, CD, radio, hob },
  } = camper;

  return (
    <div className={css.featuresContainer}>
      <ul className={css.featuresWrapper}>
        {adults > 0 && (
          <li className={css.wrapper}>
            <Icon
              iconName="users"
              width="20"
              height="20"
              styles={css.windIcon}
            />
            <p className={css.text}>{adults} adults</p>
          </li>
        )}
        {transmission && (
          <li className={css.wrapper}>
            <Icon
              iconName="automatic"
              width="20"
              height="20"
              styles={css.hobIcon}
            />
            <p className={css.text}>
              {transmission === 'automatic' ? 'Automatic' : transmission}
            </p>
          </li>
        )}
        {freezer > 0 && (
          <li className={css.wrapper}>
            <Icon
              iconName="wind"
              width="20"
              height="20"
              styles={css.windIcon}
            />
            <p className={css.text}>AC</p>
          </li>
        )}
        {engine && (
          <li className={css.wrapper}>
            <Icon
              iconName="automatic"
              width="20"
              height="20"
              styles={css.hobIcon}
            />
            <p className={css.text}>
              {engine === 'petrol' ? 'Petrol' : transmission}
            </p>
          </li>
        )}
        {kitchen > 0 && (
          <li className={css.wrapper}>
            <Icon iconName="eat" width="20" height="20" styles={css.hobIcon} />
            <p className={css.text}>kitchen</p>
          </li>
        )}
        {beds > 0 && (
          <li className={css.wrapper}>
            <Icon iconName="bed" width="20" height="20" styles={css.hobIcon} />
            <p className={css.text}>
              {beds} {beds > 1 ? 'beds' : 'bed'}
            </p>
          </li>
        )}
        {airConditioner > 0 && (
          <li className={css.wrapper}>
            <Icon
              iconName="conder"
              width="20"
              height="20"
              styles={css.hobIcon}
            />
            <p className={css.text}>
              {airConditioner}{' '}
              {airConditioner > 1 ? 'air conditioners' : 'air conditioner'}
            </p>
          </li>
        )}
        {CD > 0 && (
          <li className={css.wrapper}>
            <Icon iconName="cd" width="20" height="20" styles={css.hobIcon} />
            <p className={css.text}>CD</p>
          </li>
        )}
        {radio > 0 && (
          <li className={css.wrapper}>
            <Icon
              iconName="radio"
              width="20"
              height="20"
              styles={css.hobIcon}
            />
            <p className={css.text}>Radio</p>
          </li>
        )}
        {hob > 0 && (
          <li className={css.wrapper}>
            <Icon iconName="hob" width="20" height="20" styles={css.hobIcon} />
            <p className={css.text}>
              {hob} {hob > 1 ? 'hobs' : 'hob'}
            </p>
          </li>
        )}
      </ul>
      <h3 className={css.subTitle}>Vehicle details</h3>
      <div className={css.details}>
        <div className={css.detailsWrapper}>
          <p>Form</p>
          <p>{form}</p>
        </div>
        <div className={css.detailsWrapper}>
          <p>Length</p>
          <p>{length}</p>
        </div>
        <div className={css.detailsWrapper}>
          <p>Width</p>
          <p>{width}</p>
        </div>
        <div className={css.detailsWrapper}>
          <p>Height</p>
          <p>{height}</p>
        </div>
        <div className={css.detailsWrapper}>
          <p>Tank</p>
          <p>{tank}</p>
        </div>
        <div className={css.detailsWrapper}>
          <p>Consumption</p>
          <p>{consumption}</p>
        </div>
      </div>
    </div>
  );
};

FeaturesDetails.propTypes = {
  camper: PropTypes.object.isRequired,
};

export default FeaturesDetails;
