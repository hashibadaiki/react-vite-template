import styles from './atom.module.scss';
const test = 'test';

export const Atom = () => {
  return (
    <div>
      <div className={styles.color}>Atom</div>
      <div>{test}</div>
    </div>
  );
};
