import React from 'react';
import PropTypes from 'prop-types';

import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../theme/theme';
import 'typeface-fredoka-one';
import 'typeface-ibm-plex-serif';

import { Header } from './header';

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={theme => css`
          *,
          *::after,
          *::before {
            box-sizing: border-box;
          }

          html {
            font-family: ${theme.fonts.body};
            font-size: 10px;
            color: ${theme.colors.body};
          }

          body {
            margin: 0;
            background-color: ${theme.colors.background};
            font-size: 1.8rem;
            line-height: ${theme.lineHeights.body};
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
