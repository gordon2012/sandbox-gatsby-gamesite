import React from 'react';
import { Flex, Box, Image } from '@rebass/emotion';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Video from '../components/Video';

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
            <Image
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
            <Image
              src="https://source.unsplash.com/weekly?water/640x480"
              alt="Amazing Vigilance"
            />
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} p={2}>
            <Image
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

        <Box py={4}>
          <Video src="hA6hldpSTF8" ratio={53.4} />
        </Box>

        <Box px={[5, 0]}>
          {[
            'urioWbjYDOU',
            'vIAim1sjf9g',
            'OXv_lF1PFiY',
            '2QolB3aMw14',
            'VJtr6V6US7M',
            'wKbuplZNaMY',
          ].map(e => (
            <Image
              key={e}
              width={[1, 1 / 3]}
              px={1}
              mb={1}
              src={`https://source.unsplash.com/${e}/800x450`}
            />
          ))}
        </Box>
      </Container>
    </Layout>
  </div>
);
