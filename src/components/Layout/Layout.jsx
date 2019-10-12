import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'typeface-fredoka-one';
import 'typeface-ibm-plex-serif';

import { theme } from '../../theme/theme';
import { Header } from '../Header/Header';
import { Content } from './elements';

export const Layout = ({ children }) => {
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
            font-family: ${theme.fonts.serif};
            font-size: 10px;
            color: ${theme.colors.lightBlue};
          }

          body {
            margin: 0;
            background-color: ${theme.colors.darkBlue};
            font-size: 1.8rem;
            font-weight: ${theme.fontWeights.text};
            line-height: ${theme.lineHeights.text};
          }

          a {
            font-weight: ${theme.fontWeights.links};
            color: ${theme.colors.pleasantYellow};
            text-decoration: none;
          }

          h1,
          h2,
          h3 {
            margin: 0;
            font-family: ${theme.fonts.sans};
            font-weight: ${theme.fontWeights.heading};
            line-height: ${theme.lineHeights.heading};
          }

          h1 {
            margin-bottom: 1.6rem;
            font-size: 7.6rem;
          }
          h2 {
            font-size: 4.3rem;
          }
          h3 {
            font-size: 2.4rem;
          }

          p {
            margin-top: 0;
            margin-bottom: 1.6rem;
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
