import PropTypes from 'prop-types';
import { useState } from 'react';
import clsx from 'clsx';

import Icon from '../Icon';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';

import css from './CamperModal.module.css';

const buildLinkClass = (isActive) => {
  return clsx(css.link, isActive && css.active);
};

const CamperModal = ({ camper, onClose }) => {
  const [activeTab, setActiveTab] = useState('features');
  const { name, price, location, reviews, rating, gallery } = camper;
  const renderContent = () => {
    switch (activeTab) {
      case 'features':
        return <Features camper={camper} />;
      case 'reviews':
        return <Reviews camper={camper} />;
      default:
        return null;
    }
  };
  return (
    <div className={css.camperModalContainer}>
      <div className={css.nameInfo}>
        <p>{name}</p>
        <button
          type="button"
          className={css.closeBtn}
          onClick={() => onClose()}
        >
          <Icon
            iconName="close"
            width="32"
            height="32"
            styles={css.iconClose}
          />
        </button>
      </div>
      <div className={css.secondInfo}>
        <div>
          <Icon iconName="star" width="16" height="16" styles={css.starIcon} />
          <p className={css.rating}>
            {rating}(
            {reviews.length > 1
              ? `${reviews.length} Reviews`
              : `${reviews.length} Review`}
            )
          </p>
        </div>
        <div>
          <Icon
            iconName="location"
            width="16"
            height="16"
            styles={css.locationIcon}
          />
          <p className={css.location}>{location}</p>
        </div>
      </div>
      <p className={css.price}>€{price}.00</p>
      <div className={css.scrollContainer}>
        <div className={css.camperGallery}>
          {gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={name}
              className={css.camperImage}
              width={290}
              height={310}
            />
          ))}
        </div>
        <p className={css.text}>{camper.description}</p>
        <ul className={css.tabList}>
          <li>
            <button
              className={buildLinkClass(activeTab === 'features')}
              onClick={() => setActiveTab('features')}
            >
              Features
            </button>
          </li>
          <li>
            <button
              className={buildLinkClass(activeTab === 'reviews')}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </li>
          <div className={css.line}></div>
        </ul>
        {renderContent()}
      </div>
    </div>
  );
};

CamperModal.propTypes = {
  camper: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CamperModal;
