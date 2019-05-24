import React from 'react';

import Title from './components/Title';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className='m0a pb4 w90 w80-d'>
        <Title />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
