import React from 'react';

import { usePosts } from '../hooks/usePosts';
import { Layout } from '../components/Layout/layout';
import { PostPreview } from '../components/PostPreview/post-preview';

import { Container } from '../page-styles/blog.styles';

const BlogPage = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Container>
        <h1>Blog</h1>
        <p>This is my blog.</p>
        <p>
          Well, not exactly. I&nbsp;really want to&nbsp;start to&nbsp;write
          something useful and enjoyable to&nbsp;read. Writing skill
          doesn&rsquo;t level up&nbsp;by&nbsp;itself. But for now, I&nbsp;did
          this blog structure as&nbsp;a&nbsp;reminder to&nbsp;me&nbsp;how lazy
          I&nbsp;am.
        </p>
      </Container>
      <Container>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default BlogPage;
