import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-fredoka-one';
import 'typeface-ibm-plex-serif';

import { theme } from '../../theme/theme';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { GlobalStyles, Centered, Content, Logos } from './layout.styles';

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <div>
        <Header />
        <Centered>
          <Logos />
          <Content>{children}</Content>
          <Footer />
        </Centered>
      </div>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
