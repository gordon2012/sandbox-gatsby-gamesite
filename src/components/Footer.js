import React from 'react';
import { css } from '@emotion/core';

import Container from './Container';

export default () => (
  <div
    css={css`
      background: #333;
      color: white;
      text-align: center;
    `}
  >
    <Container p="1em">
      Copyright {new Date().getFullYear()} Gordon Doskas
    </Container>
  </div>
);
