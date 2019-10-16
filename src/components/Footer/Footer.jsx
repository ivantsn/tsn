import React from 'react';

import { Container } from './footer.styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <small>© {currentYear} Ivan Tusnolobov All Rights Reserved</small>
      <small>
        Built with{' '}
        <a
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>{' '}
        hosted on{' '}
        <a
          href="https://www.netlify.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </small>
    </Container>
  );
};
