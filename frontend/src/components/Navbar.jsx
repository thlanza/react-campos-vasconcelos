import React from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RiFolderSettingsLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import { MenuLink } from "./MenuLink";


export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img 
        src={"logo-campos.png"} 
        alt="Logo da Campos Vasconcelos" 
        className={styles.logo}
      />
      <div className={styles.iconList}>
        <MenuLink to="/" Icon={FaHome} label="Home" />
        <MenuLink to="/contato" Icon={CgProfile} label="Contato" />
        <MenuLink to="/areas" Icon={RiFolderSettingsLine} label="Áreas de Atuação" />
        <MenuLink to="/quem-somos" Icon={CiMail} label="Quem Somos" />
      </div>
    </nav>
  );
}





