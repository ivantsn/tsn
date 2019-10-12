import React from 'react';
import { css } from '@emotion/core';

import SEO from '../components/seo';
import { Layout } from '../components/Layout/Layout';
import { DudePic } from '../components/DudePic/DudePic';

const IndexPage = () => (
  <Layout>
    <SEO />
    <article>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <DudePic />
        <section
          css={css`
            max-width: 57rem;
            padding: 0 3.2rem;
            background-image: url(/images/svg/figures.svg);
            background-repeat: no-repeat;
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
      </div>
    </article>
  </Layout>
);

export default IndexPage;
