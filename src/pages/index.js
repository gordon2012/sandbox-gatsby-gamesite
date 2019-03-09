import React from 'react';
import { Box } from '@rebass/emotion';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Video from '../components/Video';

export default () => (
  <div>
    <Layout>
      <Container s={1000} p="0 1em">
        <p>Hello world!</p>

        <Box color="white" bg="magenta" p={3} mb={4}>
          Hello from box
        </Box>

        <Video src="hA6hldpSTF8" ratio={53.4} />
      </Container>
    </Layout>
  </div>
);
