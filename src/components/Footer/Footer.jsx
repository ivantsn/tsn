import React from 'react';
import { css } from '@emotion/core';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      css={css`
        grid-column: 1/5;
        grid-row: 3/4;

        font-size: 1.4rem;
        background-color: rgba(0, 0, 0, 0.1);
        & p {
          margin-bottom: 0;
        }
      `}
    >
      <div
        css={theme => css`
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          max-width: ${theme.breakPoints.large.number}px;
          margin: 0 auto;
          padding: 1.6rem;
        `}
      >
        <p>© {currentYear} Ivan Tusnolobov All Rights Reserved</p>
        <p>
          Built with{' '}
          <a
            href="https://www.gatsbyjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gatsby
          </a>{' '}
          hosted on{' '}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </p>
      </div>
    </footer>
  );
};
