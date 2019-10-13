import React from 'react';
import { css, keyframes } from '@emotion/core';

const flicker = keyframes`
  0% { opacity: 0.1 }
  20% { opacity: 1 }
  40% { opacity: 0.5 }
  80% { opacity: 1 }
  100% { opacity: 0.1 }
`;

export const DudePic = () => {
  return (
    <picture
      css={theme => css`
        grid-column: 1/3;
        display: none;

        @media (${theme.breakPoints.medium.query}) {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
          margin: 0;
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

          animation: ${flicker} 8s ease infinite;
        `}
      />
    </picture>
  );
};
