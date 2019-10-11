import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-fredoka-one';
import 'typeface-ibm-plex-serif';

import { theme } from '../../theme/theme';
import { Content } from './elements';
import { Header } from '../Header/Header';

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
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            margin: 0;
            padding: 0 5%;
            background-color: ${theme.colors.background};
            font-size: 1.8rem;
            font-weight: ${theme.fontWeights.body};
            line-height: ${theme.lineHeights.body};
          }

          a {
            font-weight: ${theme.fontWeights.links};
            text-decoration: none;
            color: ${theme.colors.accent};
          }

          h1,
          h2,
          h3 {
            font-family: ${theme.fonts.headings};
            font-weight: ${theme.fontWeights.heading};
            line-height: ${theme.lineHeights.heading};
          }

          h1 {
            margin-top: ${theme.sizes.sm[0]}px;
            margin-bottom: ${theme.sizes.sm[1]}px;
            font-size: 7.6rem;
          }
          h2 {
            font-size: 4.3rem;
          }
          h3 {
            font-size: 2.4rem;
          }
        `}
      />
      <Header />
      <Content>{children}</Content>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
