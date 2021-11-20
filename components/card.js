import styles from '../styles/card-grid.module.scss';

export default function Card({ imgSrc = null, headerTxt = 'n/a', children }) {
  return (
    <div className={`${styles.Card} card`}>
      <div className={styles.CardHeader}>{headerTxt}</div>
      <div
        id="pic"
        style={{
          backgroundImage: `url(${imgSrc})` || '',
        }}
      >
        {imgSrc === null ? headerTxt : null}
      </div>
      <div id="card-content">{children}</div>
    </div>
  );
}
