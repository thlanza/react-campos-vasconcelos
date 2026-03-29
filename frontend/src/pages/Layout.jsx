import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import useMediaQuery from '../hooks/useMediaQuery';
import styles from './Layout.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Footer from '../components/Footer/Footer';

export default function Layout() {
  const [nav, setNav] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1200px)");

  if (!isMobile) {
    return (
      <>
        <Navbar />
        <main className="page-content">
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div className={styles.containerMobile}>
      {nav ? (
        <>
          <div className={styles.iconContainer}>
            <AiOutlineClose size={35} onClick={() => setNav(false)} />
          </div>

          <Navbar aoClicar={() => setNav(false)} />
        </>
      ) : (
        <>
          <div className={styles.iconContainer}>
            <GiHamburgerMenu size={35} onClick={() => setNav(true)} />
          </div>

          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}