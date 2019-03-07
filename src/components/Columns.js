import React from 'react';
import { css } from '@emotion/core';

export default props => {
    const style = css`
        display: grid;
        grid-gap: 1em;
        grid-template-columns: ${props.cols.map(() => '1fr').join(' ')};
    `;

    return (
        <div css={style}>
            {props.cols.map(column => <div>{column}</div>)}
        </div>
    );
};
