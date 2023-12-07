import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="container">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/work">work</Link>
        <Link to="/contact">contact</Link>
      </nav>
    </div>
  );
};

export default Header;
