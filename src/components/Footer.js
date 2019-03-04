import React from 'react';

import { css } from '@emotion/core';

export default () => (
  <div
    css={css`
      background: #333;
      color: white;
      text-align: center;
      padding: 1em;
    `}
  >
    Copyright {new Date().getFullYear()} Gordon Doskas
  </div>
);
