import styles from './AreaCard.module.css';

function AreaCard({ areaText, areaColor, area, Icon }) {

  return (
    <div className={styles.areaContainer} style={{ backgroundColor: areaColor }}>
      <Icon size={30} />
      <h1>{area}</h1>
      <p>{areaText}</p>
    </div>
  );
}

export default AreaCard;