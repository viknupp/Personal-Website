import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.menu}>
          <Link to="/work">work</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
