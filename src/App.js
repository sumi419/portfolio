import React from 'react';

import Title from './components/Title';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

import css from './styles/app.module.css';

export default function App() {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Title />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
