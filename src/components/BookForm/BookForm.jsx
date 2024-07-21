import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './BookForm.module.css';

const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    bookingDate: Yup.date().required('Booking date is required').nullable(),
    comment: Yup.string(),
  });
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    window.location.reload();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <Field
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                className={css.field}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <Field
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className={css.field}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                type="date"
                id="bookingDate"
                name="bookingDate"
                placeholder="Booking date"
                className={css.field}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                as="textarea"
                id="comment"
                name="comment"
                placeholder="Comment"
                className={css.comment}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={css.submitBtn}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookForm;
