import React from 'react';

export default function Title() {
  return (
    <section className='pb4'>
      <h1 className='fs24 fs36-t fs48-d pb32'>Hi! I'm Sumayyah.</h1>
      <p className='black60 fs16 fs20-td lh2 open-sans'>
        Full-stack web developer. Dessert connoisseur.
        <a
          className='bb pb0_5 hover'
          href='http://www.ben.edu/'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          Benedictine University{' '}
        </a>{' '}
        alumni. Software Engineer at
        <a
          className='bb pb0_5 hover'
          href='https://www.bigcommerce.com/'
          target='_blank'
          rel='noopener noreferrer'>
          {' '}
          Big Commerce.
        </a>
      </p>
    </section>
  );
}
