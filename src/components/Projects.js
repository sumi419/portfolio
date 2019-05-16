import React from 'react';

import css from '../styles/projects.module.css';

export default function Projects() {
  return (
    <section className={css.container}>
      <h2 className={css.title}>Projects</h2>
      <ul className={css.projects}>
        <li className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <a href='https://learnlocker.dev' alt='LearnLocker'>
            <h3 className={css.projectTitle}>LearnLocker</h3>
          </a>
          <p className={css.description}>
            A web application designed to keep track of courses and articles in one place and see
            what other users are learning.
          </p>
        </li>
        <li className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <a href='http://sumi-makeup.netlify.com' alt='Makeup'>
            <h3 className={css.projectTitle}>Slay All Day</h3>
          </a>
          <p className={css.description}>
            An app where users can search through makeup products across purchasing sites, all in
            one place.
          </p>
        </li>
        <li className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <a href='https://sumi-notes.netlify.com' alt='Lambda Notes'>
            <h3 className={css.projectTitle}>Lambda Notes</h3>
          </a>
          <p className={css.description}>
            An app that allows a user to create, update and delete their notes.
          </p>
        </li>
      </ul>
    </section>
  );
}
