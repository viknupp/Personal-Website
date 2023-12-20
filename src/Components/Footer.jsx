import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        <p>
          © design and code by <b>vitória knupp</b>
        </p>
        <p>
          icons by <b>icons8</b>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
