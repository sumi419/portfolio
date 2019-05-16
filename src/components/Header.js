import React from 'react';

import hibiscus from '../static/svg/1f33a.svg';

import css from '../styles/header.module.css';

export default function Header() {
  return (
    <header className={css.container}>
      <img src={hibiscus} className={css.hibiscus} alt='hibiscus' />
    </header>
  );
}
