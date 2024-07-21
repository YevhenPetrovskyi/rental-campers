import { useSelector } from 'react-redux';

import { selectFavorites } from '../../redux/camper/selectors';

import CampersListItem from '../../components/CampersListItem/CampersListItem';
import DocumentTitle from '../../components/DocumentTitle';

import css from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <DocumentTitle>Favorites - Rental Campers</DocumentTitle>

      <section>
        <h2 className={css.favTitle}>Your favorites campers</h2>
        {favorites.length > 0 ? (
          <ul className={css.favList}>
            {favorites.map((camper) => (
              <CampersListItem camper={camper} key={camper._id} />
            ))}
          </ul>
        ) : (
          <div className={css.favEmpty}>
            <p>
              The list of favorite campers is currently empty, please return to
              the catalog and add the campers you like.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Favorites;
