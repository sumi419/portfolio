import React from 'react';

import Title from './components/Title';

import css from './styles/app.module.css';

export default function App() {
  return (
    <main className={css.container}>
      <Title />
    </main>
  );
}
