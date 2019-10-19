import React from 'react';

import { usePosts } from '../hooks/usePosts';
import { Layout } from '../components/Layout/layout';
import { PostPreview } from '../components/PostPreview/post-preview';
import { SEO } from '../components/Seo/seo';

import { Container, Header } from '../page-styles/writing.styles';

const WritingPage = ({ location }) => {
  const posts = usePosts();
  return (
    <Layout>
      <SEO title={'Writing'} slug={location.pathname} />
      <Container>
        <Header>
          <h1>Writing</h1>
          <p>
            I&nbsp;really want to&nbsp;start to&nbsp;write something useful and
            enjoyable to&nbsp;read. Writing skill doesn&rsquo;t level
            up&nbsp;by&nbsp;itself. But for now, I&nbsp;made this blog structure
            as&nbsp;a&nbsp;reminder to&nbsp;me&nbsp;how lazy I&nbsp;am.
          </p>
        </Header>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Container>
    </Layout>
  );
};

export default WritingPage;
