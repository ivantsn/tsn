import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { css } from '@emotion/core';

import { formatDate } from '../../utils/helpers';
import { Layout } from '../../components/Layout/layout';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      timeToRead
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  return (
    <Layout>
      <article
        css={theme => css`
          grid-column: 1/5;

          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>{post.frontmatter.title}</h1>
        <p>
          {formatDate(post.frontmatter.date)} | {post.timeToRead} mins to read
        </p>
        <section>
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </article>
    </Layout>
  );
};
export default PostTemplate;
