import React from 'react';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// const Containter = styled.div`
//   display: flex;
// `;

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
        <img
          src="/images/svg/dude.svg"
          alt="Dude"
          css={css`
            display: none;
            width: 100%;
            max-width: 40rem;
            @media (min-width: 760px) {
              display: block;
            }
          `}
        />
        <section
          css={css`
            max-width: 57rem;
            padding: 0 3.2rem;
            background-image: url(/images/svg/figures.svg);
            background-repeat: no-repeat;
            /* background-position: cover; */
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
