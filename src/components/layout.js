import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { Global, css } from '@emotion/core';

export default props => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    `}
  >
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }
        body {
          margin: 0;
        }
        a {
          color: white;
        }
      `}
    />
    <Header />
    <div
      css={css`
        flex: 1;
        padding: 1em;
      `}
    >
      {props.children}
    </div>
    <Footer />
  </div>
);
