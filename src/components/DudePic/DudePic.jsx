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
    <figure
      css={css`
        position: relative;
        display: none;
        margin: 0;
        padding-left: 3.2rem;

        @media (min-width: 760px) {
          display: block;
        }
      `}
    >
      <img
        src="/images/svg/laptop-light.svg"
        css={css`
          position: absolute;
          top: 13%;
          right: 1%;
          animation: ${flicker} 4s ease-out infinite;
        `}
      />
      <img
        src="/images/svg/dude.svg"
        alt="Drawing of a dude sitting at a computer"
      />
    </figure>
  );
};
