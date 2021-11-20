import styles from '../styles/card-grid.module.scss';

export default function CardGrid({children}) {
  return (
    <div className={`${styles.CardGrid} card-grid`}>
      {children}
    </div>
  );
}
