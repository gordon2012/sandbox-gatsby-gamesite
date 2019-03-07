import React from 'react';

import Layout from '../components/Layout';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Columns from '../components/Columns';

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

        <Columns cols={[
          <img src="https://source.unsplash.com/eSNjFDbw_i4/640x480" alt="Reticulated Splines"/>,
          <div>
            <h3>Reticulated Splines</h3>
            <p>Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.</p>
          </div>
        ]}/>

        <Columns cols={[
          <div>
            <h3>Amazing Vigilance</h3>
            <p>Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.</p>
            <ul>
              <li>Courage</li>
              <li>Wisdom</li>
              <li>Power</li>
            </ul>
          </div>,
          <img src="https://source.unsplash.com/weekly?water/640x480" alt="Amazing Vigilance"/>
        ]}/>

        <Columns cols={[
          <img src="https://source.unsplash.com/weekly?fire/640x480" alt="Splendid! Such Wow"/>,
          <div>
            <h3>Splendid! Such Wow</h3>
            <p>Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.</p>
          </div>
        ]}/>
      </Container>
    </Layout>
  </div>
);
