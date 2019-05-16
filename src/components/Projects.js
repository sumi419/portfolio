import React from 'react';

import css from '../styles/projects.module.css';

export default function Projects() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Projects</h2>
      <div className={css.projects}>
        <div className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <h3 className={css.projectTitle}>LearnLocker</h3>
          <p className={css.description}>
            A web application designed to keep track of courses and articles in one place and see
            what other users are learning.
          </p>
        </div>
        <div className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <h3 className={css.projectTitle}>Slay All Day</h3>
          <p className={css.description}>
            An app where users can search through makeup products across purchasing sites, all in
            one place.
          </p>
        </div>
        <div className={css.project}>
          <p className={css.category}>PERSONAL</p>
          <h3 className={css.projectTitle}>Lambda Notes</h3>
          <p className={css.description}>
            An app that allows a user to create, update and delete their notes.
          </p>
        </div>
      </div>
    </div>
  );
}
