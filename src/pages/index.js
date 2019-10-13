import React from 'react';
import { css } from '@emotion/core';

import { SEO } from '../components/Seo/Seo';
import { Layout } from '../components/Layout/Layout';
import { DudePic } from '../components/DudePic/DudePic';

const IndexPage = () => (
  <Layout>
    <SEO />
    <article
      css={css`
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 1fr;
        gap: 3.2rem;
        grid-column: 2/3;
      `}
    >
      <DudePic />
      <section
        css={theme => css`
          grid-column: 1/5;

          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;

          @media (${theme.breakPoints.large.query}) {
            grid-column: 3/5;
          }
        `}
      >
        <h1>Hello</h1>
        <p>
          My name is Ivan and I’m a disigner and frontend developer based in
          Moscow.
        </p>
        <p>Interested in working together? Reach me at</p>

        <a href="mailto:ivan.tusnolobov[at]gmail.com">
          ivan.tusnolobov[at]gmail.com
        </a>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
