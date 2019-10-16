import React from 'react';

import { Navigation } from '../Navigation/navigation';

import { Container, Logos } from './header.styles';

export const Header = () => {
  return (
    <Container>
      <Navigation />
      <Logos />
    </Container>
  );
};
