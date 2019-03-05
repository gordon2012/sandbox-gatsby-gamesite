import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import Header from './Header';
import Footer from './Footer';

export default props => {
  const theme = props.theme || {};
  return (
    <ThemeProvider theme={theme}>
      <div
        css={theme => css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          background-color: ${theme.backgroundColor};
          color: ${theme.color};
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
    </ThemeProvider>
  );
};
