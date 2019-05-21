import React from 'react';

import css from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={css.container}>
      <ul className={css.links}>
        <li className={css.link}>
          <a
            href='https://www.linkedin.com/in/sumayyahasgar/'
            target='_blank'
            rel='noopener noreferrer'>
            LinkedIn
          </a>
        </li>
        <li className={css.link}>
          <a href='https://github.com/sumi419' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
        </li>
        <li className={css.link}>
          <a href='https://twitter.com/sumayyahasgar' target='_blank' rel='noopener noreferrer'>
            Twitter
          </a>
        </li>
        <li className={css.link}>
          <a href='mailto:sasgar04@gmail.com' target='_blank' rel='noopener noreferrer'>
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}
