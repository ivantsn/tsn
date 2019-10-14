import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout } from '../components/Layout/Layout';
import { SEO } from '../components/Seo/Seo';

const NotFoundPage = () => {
  const astronautQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "astronaut.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title="404: Not found" />
      <section
        css={theme => css`
          grid-column: 1/5;

          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;
          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/5;
          }
        `}
      >
        <h1>This Page is Lost in Space</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </section>{' '}
      <Img
        fluid={astronautQuery.file.sharp.fluid}
        fadeIn
        alt="Astronaut lost in space"
        css={theme => css`
          grid-column: 1/4;
          width: 100%;
          @media (${theme.breakPoints.medium.query}) {
            grid-column: 1/3;
          }
        `}
      />
    </Layout>
  );
};

export default NotFoundPage;
