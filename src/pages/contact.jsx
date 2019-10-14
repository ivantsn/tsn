import React from 'react';
import { css } from '@emotion/core';
import { Layout } from '../components/Layout/layout';

const ContactPage = () => {
  return (
    <Layout>
      <section
        css={theme => css`
          grid-column: 1/5;
          align-self: center;
          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;

          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>Get in touch</h1>
        <p>
          Want to work together? Or you need help with the open source project?
          Or maybe just ask me a question?
        </p>
        <p>
          I’m most active and reachable on{' '}
          <a
            href="https://twitter.com/ivan_tusnolobov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          or via{' '}
          <a
            href="mailto:ivan.tusnolobov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </p>
      </section>
    </Layout>
  );
};
export default ContactPage;
