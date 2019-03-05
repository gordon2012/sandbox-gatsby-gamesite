import React from 'react';
import { css } from '@emotion/core';

export default props => {
  const style = css`
    background-image: url("${props.img}");
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;

    ${props.h ? `height: ${props.h}px;` : ''}

    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div css={style}>
        <div css={css`flex: 1;`}>
            {props.children}
        </div>
    </div> );
};
