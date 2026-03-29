import { Link } from "react-router-dom";
import styles from './Footer.module.css';
import { FaArrowRight } from "react-icons/fa";

function IconWrapper({ Icon }) {

  return (
    <div className={styles.iconContainer}>
        <Icon 
            className={styles.icon}
            color={"#000000"}
        />
    </div>
  );
}

export default IconWrapper;