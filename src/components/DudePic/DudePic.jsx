import React from 'react';
import { css, keyframes } from '@emotion/core';

const flicker = keyframes`
  0% { opacity: 0.9 }
  20% { opacity: 0.4 }
  40% { opacity: 0.9 }
  80% { opacity: 0.4 }
  100% { opacity: 0.9 }
`;

export const DudePic = () => {
  return (
    <picture
      css={theme => css`
        grid-column: 1/4;

        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        margin: 0;

        @media (${theme.breakPoints.medium.query}) {
          grid-column: 1/3;
        }
      `}
    >
      <img
        css={css`
          width: 100%;
          grid-column: 1/2;
          grid-row: 1/2;
        `}
        src="/images/svg/dude.svg"
        alt="Drawing of a dude sitting at a computer"
      />

      <img
        src="/images/svg/laptop-light.svg"
        alt="Laptop's screen is flickering"
        css={css`
          position: relative;
          width: 100%;
          grid-column: 1/2;
          grid-row: 1/2;

          animation: ${flicker} 3s ease-out infinite;
        `}
      />
    </picture>
  );
};
