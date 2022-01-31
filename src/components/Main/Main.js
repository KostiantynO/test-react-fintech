import { Container, Section } from 'common';
import { Form } from 'components';

import scss from './Main.module.scss';

export const Main = () => {
  return (
    <main className={scss.Main}>
      <Section h="1" title={'Format Number'}>
        <Container>
          <Form />
        </Container>
      </Section>
    </main>
  );
};
