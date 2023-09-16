// REACT DEFAULTS

// STYLES
import styles from './loading.module.scss';

const Loading = ({ text }: any) => {
  return (
    <section className={styles.Loading}>
      {text ? (
        <h4 className={styles.loading__text}>{text}</h4>
      ) : (
        <img
          className={styles.Loading__img}
          alt="logo"
          src={`https://res.cloudinary.com/kingsleysolomon/image/upload/v1694900245/hng/Gear-0.2s-200px_1_xye3wd.svg`}
        />
      )}
    </section>
  );
};

export default Loading;
