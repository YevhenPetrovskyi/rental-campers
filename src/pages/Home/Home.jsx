import { NavLink } from 'react-router-dom';

import DocumentTitle from '../../components/DocumentTitle';

import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <DocumentTitle>Home - Rental Campers</DocumentTitle>

      <section>
        <div className={css.homeWrapper}>
          <h1 className={css.homeTitle}>Welcome to Rental Campers</h1>
          <p className={css.subtitle}>
            Rent an RV from a local owner in Ukraine
          </p>
          <p className={css.text}>
            Book your perfect motorhome easily, safely and affordably
          </p>
          <NavLink to="/catalog" className={css.link}>
            Rent now
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Home;
