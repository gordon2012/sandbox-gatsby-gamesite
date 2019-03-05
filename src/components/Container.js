import React from 'react';
import { css } from '@emotion/core';

export default props => {
  const style = css`
    max-width: ${props.s ? `${props.s}px` : 'none'};
    margin: 0 auto;
    padding: ${props.p ? props.p : '0'};
    border: ${props.d ? `3px solid ${props.d}` : 'none'};
  `;

  return (
    <div
      css={style}
    >
      {props.children}
    </div> );
};
