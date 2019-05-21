import React from 'react';

import css from '../styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={css.container}>
      <ul className={css.links}>
        <li className={css.link}>
          <a href='https://www.linkedin.com/in/sumayyahasgar/'>LinkedIn </a>
        </li>
        <li className={css.link}>
          <a href='https://github.com/sumi419'>GitHub</a>
        </li>
        <li className={css.link}>
          <a href='mailto:sasgar04@gmail.com'>Email </a>
        </li>
      </ul>
    </footer>
  );
}
