import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import { FaArrowRight } from "react-icons/fa";

function ArrowRightIcon() {

  return (
    <div className={styles.iconContainer}>
        <FaArrowRight 
            className={styles.icon}
            color={"#000000"}
        />
    </div>
  );
}

export default ArrowRightIcon;