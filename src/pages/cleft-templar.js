import React from 'react';
import { Flex, Box, Image, Heading, Text, Link } from '@rebass/emotion';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Video from '../components/Video';
import Carousel from '../components/Carousel';

const theme = {
  backgroundColor: 'black',
  color: 'white',
};

const unsplash = (id, size) => `https://source.unsplash.com/${id}/${size}`;

export default () => (
  <div>
    <Layout theme={theme}>
      <Container s={1200}>
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
              src="https://source.unsplash.com/GfJfHC-3yWc/800x450"
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
              src="https://source.unsplash.com/IWKjV_nhhOY/800x450"
              alt="Amazing Vigilance"
            />
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} p={2}>
            <Image
              src="https://source.unsplash.com/MYjFOiVWWT8/800x450"
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

        <Heading className="text-center" mb={3}>
          Purchase Cleft Templar Now!
        </Heading>
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

        <Heading
          className="text-center"
          fontWeight="normal"
          fontSize={6}
          mt={5}
          mb={4}
        >
          Cleft Templar Redefines Modularity with 4 Expansion Packs
        </Heading>
        <Flex flexWrap="wrap">
          {[
            {
              img: 'urioWbjYDOU',
              heading: 'Legendary Warrior',
              copy:
                'Battle hordes of foes and smite them with your mighty, powerful weapons.',
            },
            {
              img: 'vIAim1sjf9g',
              heading: 'Stalwart Defender',
              copy: 'Protect the innocent with your powerful shield.',
            },
            {
              img: 'OXv_lF1PFiY',
              heading: 'Rampaging Berserker',
              copy:
                'Wildly annihilate anyone foolish enough to get in your way.',
            },
            {
              img: '2QolB3aMw14',
              heading: 'Cunning Assassin',
              copy:
                'Decimate your foes with well placed blows to vital organs.',
            },
          ].map((e, i) => (
            <Box key={e.img} width={[1 / 2, 1 / 4]} px={[4, 3]} py={3}>
              <Heading
                className="text-center"
                fontWeight="normal"
                fontSize={[3, 1, 2, 4]}
                mb={2}
              >
                {e.heading}
              </Heading>
              <Image src={`https://source.unsplash.com/${e.img}/500x500`} />
              <Text fontSize={[1, 2]}>{e.copy}</Text>
            </Box>
          ))}
        </Flex>

        <Flex flexWrap="wrap" p={1} mt={4}>
          <Box width={[1, 1 / 2]} p={1}>
            <Heading>Some Rad Tunes</Heading>
            <Text my={2}>
              Get pumped while slaughtering your foes with a soundtrack worthy
              of the god of thunder.
            </Text>
          </Box>
          <Box width={[1, 1 / 2]} p={1}>
            <Image src="https://source.unsplash.com/JCYdysf3d5Q/800x300" />
          </Box>
        </Flex>
        <Text className="text-center" mt={2} mb={3}>
          Purchase the Official Soundtrack
        </Text>
        <Box width={[1, 1 / 2]} mx="auto">
          <Link href="https://google.com">
            <Image src="https://source.unsplash.com/9zxZeisipcE/800x200" />
          </Link>
        </Box>

        <Carousel
          mt={6}
          images={[
            'K9WKqYj55E0',
            'ADWxmGXCitw',
            'Pnvqz3Be90w',
            'urioWbjYDOU',
            'vIAim1sjf9g',
            'OXv_lF1PFiY',
            '2QolB3aMw14',
            'VJtr6V6US7M',
            'wKbuplZNaMY',
          ].map(id => unsplash(id, '1200x800'))}
        />
      </Container>
    </Layout>
  </div>
);
