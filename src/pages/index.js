import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';

export default () => (
  <div>
    <Layout>
      <Container s={1000} p="0 1em">
        <p>hello world</p>
      </Container>
    </Layout>
  </div>
);
