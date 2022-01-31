import React from 'react';
import { Container } from 'common';

import scss from './Section.module.scss';

export const Section = ({ title, h = '2', children }) => (
  <section className={scss.Section}>
    <Container>
      {h === '1' && <h1 className={scss.Title}>{title}</h1>}
      {h === '2' && <h2 className={scss.Title}>{title}</h2>}
      {h === '3' && <h3 className={scss.Title}>{title}</h3>}
    </Container>

    {children}
  </section>
);
