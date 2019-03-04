import React from 'react';
import { css } from '@emotion/core';

export default props => (
  <div
    css={css`
      ${props.size ? `max-width: ${props.size}px;` : null}
      margin: 0 auto;
    `}
  >
    {props.children}
  </div>
);
