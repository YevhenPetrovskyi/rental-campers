import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import image from '../../assets/images/logo.png';

import css from './Menu.module.css';

const getClassName = ({ isActive }) =>
  clsx(css.link, {
    [css.linkActive]: isActive,
  });

const getLogoClassName = ({ isActive }) =>
  clsx(css.logo, {
    [css.logoActive]: isActive,
  });

const Menu = () => {
  const location = useLocation();

  return (
    <header className={(css.header, css.container)}>
      <nav className={css.nav}>
        <NavLink className={getLogoClassName} to="/" state={{ from: location }}>
          <img src={image} alt="logo" width="80" height="80" />
        </NavLink>
        <div className={css.linksContainer}>
          <NavLink
            className={getClassName}
            to="/catalog"
            state={{ from: location }}
          >
            Catalog
          </NavLink>
          <NavLink
            className={getClassName}
            to="/favorites"
            state={{ from: location }}
          >
            Favorites
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
