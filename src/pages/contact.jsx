import React from 'react';
import { Layout } from '../components/Layout/layout';

import { Container } from '../page-styles/contact.styles';

const ContactPage = () => {
  return (
    <Layout>
      <Container>
        <h1>Get in touch</h1>
        <p>
          Want to work together? Or you need help with the open source project?
          Or just ask me a question?
        </p>
        <p>
          I’m most active and reachable on{' '}
          <a
            href="https://twitter.com/ivan_tusnolobov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>{' '}
          or via{' '}
          <a
            href="mailto:ivan.tusnolobov@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
        </p>
      </Container>
    </Layout>
  );
};
export default ContactPage;
