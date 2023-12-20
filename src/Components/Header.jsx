import React from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.menu}>
          <NavLink to="/">home</NavLink>
          <NavLink to="/about">about</NavLink>
          <NavLink to="/work">work</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
