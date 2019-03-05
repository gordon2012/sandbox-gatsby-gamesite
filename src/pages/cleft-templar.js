import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';

const theme = {
  backgroundColor: 'black',
  color: 'white',
};

export default () => (
  <div>
    <Layout theme={theme}>
      <Container s={1000}>
        <Hero img="https://source.unsplash.com/LlXzILHulTM/800x1000" h={600}>
          <Container p="0 1em">
            <h1>Cleft Templar</h1>
            <p>A game.</p>
          </Container>
        </Hero>
      </Container>
    </Layout>
  </div>
);
