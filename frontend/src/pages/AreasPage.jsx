import AreaCard from "../components/AreaCard/AreaCard";
import { areaObjects } from "../components/AreaCard/areaObjects";
import useMediaQuery from "../hooks/useMediaQuery";

import styles from './AreasPage.module.css';

function AreasPage() {
    const isMobile = useMediaQuery("(max-width: 1200px)");
  return (
    <div className={styles.wrapper}>
      <img src={isMobile ? null: "areas-banner.png"} />
      {isMobile ? <h1>ÁREAS DE ATUAÇÃO</h1> : null}
      <div className={styles.cardContainer}>
      {areaObjects.map((el, idx) => (
        <AreaCard key={idx} areaText={el.areaText} areaColor={el.areaColor} area={el.area} Icon={el.Icon} />
      ))}
      </div>
    </div>
  );
}

export default AreasPage;