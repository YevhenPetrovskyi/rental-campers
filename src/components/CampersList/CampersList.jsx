import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFilteredCampers } from '../../redux/camper/selectors';

import CampersListItem from '../CampersListItem/CampersListItem';
import Icon from '../Icon';

import css from './CampersList.module.css';

const CampersList = () => {
  const campers = useSelector(selectFilteredCampers);

  const [maxCampers, setMaxCampers] = useState(4);

  const showMore = () => {
    setMaxCampers((maxCampers) => maxCampers + 4);
  };

  const visibleCampers = campers.slice(0, maxCampers);

  return (
    <div>
      <ul className={css.campersList}>
        {visibleCampers.map((camper) => (
          <CampersListItem key={camper._id} camper={camper} />
        ))}
      </ul>

      {visibleCampers.length === 0 && (
        <div className={css.empty}>
          <p>
            Unfortunately, there are no campers that meet your requirements...
          </p>
          <Icon iconName="sad" width="20" height="20" styles={css.iconSad} />
        </div>
      )}

      {visibleCampers.length < campers.length && (
        <button onClick={showMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}
    </div>
  );
};

export default CampersList;
