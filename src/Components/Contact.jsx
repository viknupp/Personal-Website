import React from 'react';
import styles from './Contact.module.css';
import Mail from '../Assets/Mail.svg';
import GitHub from '../Assets/GitHub.svg';
import LinkedIn from '../Assets/LinkedIn.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section className={styles.sectionContact}>
      <div className={`container ${styles.contact}`}>
        <h1 className={styles.title}>let’s get in touch.</h1>
        <p className={styles.paragraph}>
          First of all, thank you for your visit. If you like my work, consider
          get in touch to. Send me an e-mail and I’ll respond as soon as
          possible. You also can find me often on my professional social media
          like linkedin or occasionally on my instagram.
        </p>
        <div className={styles.links}>
          <Link to="https://github.com/viknupp" target="_blank">
            <img src={GitHub} alt="github" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/vit%C3%B3ria-knupp-082947175/"
            target="_blank"
          >
            <img src={LinkedIn} alt="linkedin" />
          </Link>
          <Link
            to="javascript:void(0)"
            onClick={() =>
              (window.location = 'mailto:arq.vitoriaknupp@gmail.com')
            }
          >
            <img src={Mail} alt="linkedin" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
