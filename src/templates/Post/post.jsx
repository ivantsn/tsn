import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { formatDate } from '../../utils/helpers';
import { Layout } from '../../components/Layout/layout';
import { SEO } from '../../components/Seo/seo';

import { Container, Header } from './post.styles';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        slug
      }
      timeToRead
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        slug={post.frontmatter.slug}
        description={post.frontmatter.spoiler}
        isPost={true}
      />
      <Container>
        <Header>
          <h1>{post.frontmatter.title}</h1>
          <small>
            {formatDate(post.frontmatter.date)} | {post.timeToRead} mins to read
          </small>
        </Header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Container>
    </Layout>
  );
};
export default PostTemplate;
