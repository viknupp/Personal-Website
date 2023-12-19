import React from 'react';
import styles from './Work.module.css';
import Teste from '../Assets/Teste.png';
import Teste2 from '../Assets/Teste2.png';

const Work = () => {
  return (
    <section className={styles.background}>
      <div className={`container ${styles.projects}`}>
        <h1 className={styles.title}>projects.</h1>
        <div className={styles.architect}>
          <h3>as architect.</h3>
          <div className={styles.archImages}>
            <img src={Teste} alt="" />
            <img src={Teste} alt="" />
            <img src={Teste} alt="" />
            <img src={Teste} alt="" />
          </div>
        </div>
        <div>
          <h3>as developer and designer.</h3>
          <div className={styles.devImages}>
            <img src={Teste2} alt="" />
            <img src={Teste2} alt="" />
            <img src={Teste2} alt="" />
            <img src={Teste2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
