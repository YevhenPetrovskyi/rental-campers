import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectCampers, selectIsLoading } from '../../redux/camper/selectors';
import { fetchCampers } from '../../redux/camper/operations';

import Loader from '../../components/Loader/Loader';
import DocumentTitle from '../../components/DocumentTitle';
import FilterBar from '../../components/FilterBar/FilterBar';
import CampersList from '../../components/CampersList/CampersList';

import css from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);
  const loading = useSelector(selectIsLoading);

  useEffect(() => {
    if (campers.length === 0) {
      dispatch(fetchCampers());
    }
  }, [dispatch, campers]);

  return (
    <>
      <DocumentTitle>Catalog - Rental Campers</DocumentTitle>

      <section>
        <div className={css.catalogWrapper}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <FilterBar />
              <CampersList />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Catalog;
