import React from 'react';
import { css } from '@emotion/core';

import { Layout } from '../components/Layout/layout';
import { SEO } from '../components/Seo/Seo';

const WorkPage = () => (
  <Layout>
    <SEO />

    <section
      css={theme => css`
        grid-column: 1/5;

        background-image: url(/images/svg/figures/figures.svg);
        background-repeat: no-repeat;
        @media (${theme.breakPoints.medium.query}) {
          grid-column: 2/4;
        }
      `}
    >
      <h1>Work</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed quis
        itaque illo molestiae alias accusamus animi voluptatum reiciendis
        beatae.
      </p>
    </section>
  </Layout>
);

export default WorkPage;
