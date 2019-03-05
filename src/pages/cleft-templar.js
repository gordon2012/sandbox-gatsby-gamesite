import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/Container';

const theme = {
  backgroundColor: 'black',
  color: 'white',
};

export default () => (
  <div>
    <Layout theme={theme}>
      <Container s={1000} p="0 1em">
        <h1>Cleft Templar</h1>
        <p>A game.</p>
      </Container>
    </Layout>
  </div>
);
