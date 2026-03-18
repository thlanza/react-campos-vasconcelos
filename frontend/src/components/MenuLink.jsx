import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

export function MenuLink({ to, Icon, label }) {
    const iconColor = () => {
        console.log("to", to);
        if (to === "/") {
            return "#FFFFFF";
        }
        if (to === "/admin") {
            return "#D5D6D2";
        }
        return "#E1B16A";
    }
    return (
        <li className={styles.item}>
            <NavLink
                to={to}
                className={({ isActive}) => 
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                }
            >
                <Icon color={iconColor()} size={30} />
                <span className={styles.label} style={{ color: iconColor() }}>{label}</span>
            </NavLink>
        </li>
    )
}