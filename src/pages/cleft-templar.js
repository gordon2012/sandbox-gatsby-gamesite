import React from 'react';

import { Flex, Box } from '@rebass/emotion';

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

        <h2 className="text-center">Fall into the Shadows</h2>

        <Flex>
          <Box width={1 / 2} p={2}>
            <img
              src="https://source.unsplash.com/eSNjFDbw_i4/640x480"
              alt="Reticulated Splines"
            />
          </Box>
          <Box width={1 / 2} p={2}>
            <h3>Reticulated Splines</h3>
            <p>
              Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum.
            </p>
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} p={2}>
            <h3>Amazing Vigilance</h3>
            <p>
              Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.
            </p>
            <ul>
              <li>Courage</li>
              <li>Wisdom</li>
              <li>Power</li>
            </ul>
          </Box>
          <Box width={1 / 2} p={2}>
            <img
              src="https://source.unsplash.com/weekly?water/640x480"
              alt="Amazing Vigilance"
            />
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} p={2}>
            <img
              src="https://source.unsplash.com/weekly?fire/640x480"
              alt="Splendid! Such Wow"
            />
          </Box>
          <Box width={1 / 2} p={2}>
            <h3>Splendid! Such Wow</h3>
            <p>
              Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum,
              lorem ipsum, lorem ipsum, lorem ipsum.
            </p>
          </Box>
        </Flex>
      </Container>
    </Layout>
  </div>
);
