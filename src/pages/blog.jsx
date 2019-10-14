import React from 'react';
import { css } from '@emotion/core';

import { Layout } from '../components/Layout/Layout';
import { PostPreview } from '../components/PostPreview/PostPreview';
import { usePosts } from '../hooks/usePosts';

const BlogPage = () => {
  const posts = usePosts().reverse();
  return (
    <Layout>
      <section
        css={theme => css`
          grid-column: 1/5;

          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>hi</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio,
          quisquam. Id, ducimus. Quis laborum cum aspernatur veniam non. Sunt,
          quis?
        </p>
      </section>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default BlogPage;
