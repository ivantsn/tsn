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
          My&nbsp;name is&nbsp;Ivan Tusnolobov. I&rsquo;m a&nbsp;developer and
          designer from Moscow, Russia.
        </p>
        <p>
          I&rsquo;m currently looking for a&nbsp;full-time developer job and
          am&nbsp;not available for freelance work. But&nbsp;I&rsquo;m always
          happy to&nbsp;contribute to&nbsp;some cool open-source project.
        </p>
        <p>
          Interested in&nbsp;working together? Reach me&nbsp;at&nbsp;{' '}
          <a
            href="mailto:ivan.tusnolobov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ivan.tusnolobov[at]gmail.com
          </a>
        </p>
      </div>
    </Container>
  </Layout>
);

export default IndexPage;
