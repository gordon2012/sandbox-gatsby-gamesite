import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Container from './Container';

export default () => (
  <div
    css={css`
      background: #333;
    `}
  >
    <Container s={1000} p="1em">
      <Link to="/">Home</Link> &nbsp;
      <Link to="/cleft-templar">Cleft Templar</Link>
    </Container>
  </div>
);
