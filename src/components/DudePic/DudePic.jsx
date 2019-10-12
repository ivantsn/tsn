import React from 'react';
import { css, keyframes } from '@emotion/core';

const flicker = keyframes`
  0% { opacity: 0.8 }
  20% { opacity: 0.4 }
  40% { opacity: 0.8 }
  80% { opacity: 0.4 }
  100% { opacity: 0.8 }
`;

export const DudePic = () => {
  return (
    <figure
      css={css`
        position: relative;
        display: none;
        margin: 0;

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
          animation: ${flicker} 4s ease-in-out infinite;
        `}
      />
      <img
        css={css`
          padding-left: 3.2rem;
        `}
        src="/images/svg/dude.svg"
        alt="Drawing of a dude sitting at a computer"
      />
    </figure>
  );
};
