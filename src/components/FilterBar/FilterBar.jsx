import FilterForm from '../FilterForm/FilterForm';
import LocationInput from '../LocationInput/LocationInput';

import css from './FilterBar.module.css';

const FilterBar = () => {
  return (
    <div className={css.filterBarContainer}>
      <LocationInput />
      <FilterForm />
    </div>
  );
};

export default FilterBar;
