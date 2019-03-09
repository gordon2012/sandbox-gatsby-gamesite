import React from 'react';
import { css } from '@emotion/core';

export default props => {
  const { src } = props;
  const ratio = props.ratio || 56.25;

  const style = {
    wrapper: css`
      position: relative;
      padding-bottom: ${ratio}%;
      padding-top: 25px;
    `,
    iframe: css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `,
  };

  return (
    <div css={style.wrapper}>
      <iframe
        css={style.iframe}
        width="560"
        height="315"
        src={`https://www.youtube-nocookie.com/embed/${src}?controls=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={src}
      />
    </div>
  );
};
