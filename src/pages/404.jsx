import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { Layout } from '../components/Layout/layout';
import { SEO } from '../components/Seo/seo';

import { Container, Header, StyledImage } from '../page-styles/404.styles';

const NotFoundPage = ({ location }) => {
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
      <SEO title="404: Not found" slug={location.pathname} />
      <Container>
        <Header>
          <h1>This Page is Lost in Space</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Header>
        <StyledImage
          fluid={astronautQuery.file.sharp.fluid}
          fadeIn
          alt="Astronaut lost in space"
        />
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
