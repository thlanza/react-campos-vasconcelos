import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiFolderSettingsLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { MenuLink } from "./MenuLink";
import useMediaQuery from "../hooks/useMediaQuery";

export function Navbar({ aoClicar }) {
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const aoClicarCallback = isMobile ? aoClicar : () => {}
  return (
    <nav className={styles.navbar}>
       <img 
        src={"logo-campos.png"} 
        alt="Logo da Campos Vasconcelos" 
        className={styles.logo}
      />
      <div className={styles.iconList}>
        <MenuLink to="/" Icon={FaHome} label="Home" onClick={aoClicarCallback}/>
        <MenuLink to="/contato" Icon={CgProfile} label="Contato" onClick={aoClicarCallback}/>
        <MenuLink to="/areas" Icon={RiFolderSettingsLine} label="Áreas de Atuação" onClick={aoClicarCallback}/>
        <MenuLink to="/quem-somos" Icon={CiMail} label="Quem Somos" onClick={aoClicarCallback}/>
      </div>
    </nav>
  );
}





