import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Icon from '../Icon';

import css from './FilterForm.module.css';

const filters = [
  { id: 'wind', label: 'AC', name: 'airConditioner' },
  { id: 'automatic', label: 'Automatic', name: 'transmission' },
  { id: 'eat', label: 'Kitchen', name: 'kitchen' },
  { id: 'tv', label: 'TV', name: 'TV' },
  { id: 'shower', label: 'Shower/WC', name: 'shower' },
];

const camperTypes = [
  { id: 'camper1', label: 'Van', value: 'panelTruck' },
  { id: 'camper2', label: 'Fully Integrated', value: 'fullyIntegrated' },
  { id: 'camper3', label: 'Alcove', value: 'alcove' },
];

const validationSchema = Yup.object().shape({
  options: Yup.array().min(1, 'Select at least one option'),
  camperType: Yup.string().required('Select a camper type'),
});

const FilterForm = () => {
  return (
    <Formik
      initialValues={{
        options: [],
        camperType: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(_, { resetForm }) => {
        resetForm();
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className={css.filterForm} onSubmit={handleSubmit}>
          <h2 className={css.filtersTitle}>Filters </h2>

          <div>
            <h3 className={css.filtersSubTitle}>Vehicle equipment</h3>
            <div className={css.filtersContainer}>
              {filters.map((filter) => (
                <label key={filter.id} className={css.labelContainer}>
                  <Field
                    type="checkbox"
                    name="options"
                    value={filter.name}
                    checked={values.options.includes(filter.name)}
                    onChange={handleChange}
                    className={css.checkbox}
                  />
                  <div className={css.filterWrapper}>
                    <Icon
                      iconName={filter.id}
                      width="32"
                      height="32"
                      styles={css[filter.id]}
                    />
                    <p className={css.filterLabel}>{filter.label}</p>
                  </div>
                </label>
              ))}
              <ErrorMessage
                className={css.errorMessage}
                name="options"
                component="div"
              />
            </div>
          </div>

          <div>
            <h3 className={css.filtersSubTitle}>Vehicle type</h3>
            <div className={css.filtersContainer}>
              {camperTypes.map((type) => (
                <label key={type.id} className={css.labelContainer}>
                  <Field
                    type="radio"
                    name="camperType"
                    value={type.value}
                    checked={values.camperType === type.value}
                    onChange={handleChange}
                    className={css.radio}
                  />
                  <div className={css.filterWrapper}>
                    <Icon
                      iconName={type.id}
                      width="32"
                      height="32"
                      styles={css[type.id]}
                    />
                    <p className={css.filterLabel}>{type.label}</p>
                  </div>
                </label>
              ))}
              <ErrorMessage
                className={css.errorMessage}
                name="camperType"
                component="div"
              />
            </div>
          </div>
          <button type="submit" className={css.searchBtn}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FilterForm;
