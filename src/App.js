import React from 'react';

import Title from './components/Title';
import Projects from './components/Projects';

import css from './styles/app.module.css';

export default function App() {
  return (
    <main className={css.container}>
      <div>
        <Title />
        <Projects />
      </div>
    </main>
  );
}
