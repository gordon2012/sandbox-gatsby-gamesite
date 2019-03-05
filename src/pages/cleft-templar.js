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
      <Container size={1000}>
        <h1>Cleft Templar</h1>
        <p>A game.</p>
      </Container>
    </Layout>
  </div>
);
