import React from 'react';

import css from '../styles/footer.module.css';

export default function Footer() {
  return (
    <div>
      <ul>
        <a href='https://www.linkedin.com/in/sumayyahasgar/'>
          <li className={css.link}>LinkedIn</li>
        </a>
        <a href='https://github.com/sumi419'>
          <li className={css.link}>GitHub</li>
        </a>
        <a href='mailto:sasgar04@gmail.com'>
          <li className={css.link}>Email</li>
        </a>
      </ul>
    </div>
  );
}
