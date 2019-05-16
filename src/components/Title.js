import React from 'react';

import css from '../styles/title.module.css';

export default function Title() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Hi! I'm Sumayyah. Full-stack web developer. Dessert connoisseur.
      </h1>
      <p className={css.description}>Lambda School graduate</p>
    </div>
  );
}
