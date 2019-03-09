import React from 'react';

import { Box } from '@rebass/emotion';

import Layout from '../components/Layout';
import Container from '../components/Container';

export default () => (
  <div>
    <Layout>
      <Container s={1000} p="0 1em">
        <p>Hello world!</p>

        <Box color="white" bg="magenta" p={3}>
          Hello from box
        </Box>
      </Container>
    </Layout>
  </div>
);
