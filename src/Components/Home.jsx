import React from 'react';
import styles from './Home.module.css';
import GitHub from '../Assets/GitHub.svg';
import LinkedIn from '../Assets/LinkedIn.svg';
import { Link } from 'react-router-dom';
import Work from './Work';

const Home = () => {
  return (
    <div className={styles.intro}>
      <div className="container">
        <h1>architect.</h1> <h1>front-end developer.</h1> <h1>designer.</h1>
        <p className={styles.paragraph}>
          Hello, nice to meet you! I’m architect and urban designer, currently
          in a career transition to the technology area, focused on Front-End
          Development and UX/UI Design. I’m brazilian based in Porto, Portugal.
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
        </div>
      </div>
    </div>
  );
};

export default Home;
