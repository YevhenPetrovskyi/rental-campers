import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.container}>
      <span className={css.loader}></span>
    </div>
  );
};

export default Loader;
