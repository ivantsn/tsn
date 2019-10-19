import React from 'react';
import PropTypes from 'prop-types';

import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import { theme } from '../../theme/theme';
import { Header } from '../Header/header';
import { Footer } from '../Footer/footer';

import { GlobalStyles, Container, Content } from './layout.styles';
import 'typeface-nunito';
import 'typeface-ibm-plex-serif';

export const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
