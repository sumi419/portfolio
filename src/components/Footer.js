import React from 'react';

import { links } from '../static/lib/links';

export default function Footer() {
  return (
    <footer className='m0a pb4 pt4 w90 w80-d'>
      <ul className='flex-m flex-row'>
        {links.map((link) => (
          <li className='mr2-d black60 fs16 pb1 pt1 hover' key={link.name}>
            <a href={link.href} target='_blank' rel='noopener noreferrer'>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
