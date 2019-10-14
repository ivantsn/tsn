import React from 'react';
import { css } from '@emotion/core';

import { SEO } from '../components/Seo/Seo';
import { Layout } from '../components/Layout/Layout';
import { DudePic } from '../components/DudePic/DudePic';

const IndexPage = () => (
  <Layout>
    <SEO />

    <DudePic />
    <section
      css={theme => css`
        grid-column: 1/5;
        align-self: center;
        background-image: url(/images/svg/figures/figures.svg);
        background-repeat: no-repeat;

        @media (${theme.breakPoints.medium.query}) {
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

      <a
        href="mailto:ivan.tusnolobov@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        ivan.tusnolobov[at]gmail.com
      </a>
    </section>
  </Layout>
);

export default IndexPage;
