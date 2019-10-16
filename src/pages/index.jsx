import React from 'react';

import { SEO } from '../components/Seo/seo';
import { Layout } from '../components/Layout/layout';

import { Container, ImageContainer } from '../page-styles/index.styles';
const IndexPage = ({ location }) => (
  <Layout>
    <SEO slug={location.pathname} />
    <Container>
      <ImageContainer>
        <img
          src="/images/svg/dude.svg"
          alt="Drawing of a dude sitting at a computer"
        />
      </ImageContainer>
      <div>
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
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
