import React from 'react';
import Layout from '../components/Layout/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Containter = styled.div`
  display: flex;
`;

const IndexPage = () => (
  <Layout>
    <SEO />
    <Containter>
      {/* <img src="/images/svg/dude.svg" alt="Dude" /> */}
      <div
        css={css`
          max-width: 420px;
        `}
      >
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          quis itaque illo molestiae alias accusamus animi voluptatum reiciendis
          beatae.
        </p>
      </div>
    </Containter>
  </Layout>
);

export default IndexPage;
