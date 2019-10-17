import { css } from '@emotion/core';
import styled from '@emotion/styled';

// ---------------------
// # PAGE CONTAINER
// ---------------------

export const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: 1fr auto;

  height: 100vh;
  max-width: ${({ theme }) => theme.breakPoints.large.number}px;
  margin: 0 auto;
  padding: 0 1.6rem;
`;

// ---------------------
// # CONTENT CONTAINER
// ---------------------

export const Content = styled.main`
  grid-column: 1/2;
  grid-row: 1/2;

  min-width: 0;
  padding-top: 24rem;
  padding-bottom: calc(4rem + 5vw);

  @media (${({ theme }) => theme.breakPoints.small.query}) {
    padding-top: 32rem;
  }
`;

// ---------------------
// # GLOBAL STYLES
// ---------------------

export const GlobalStyles = theme => css`
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

    font-size: 1.6rem;
    font-weight: ${theme.fontWeights.text};
    line-height: ${theme.lineHeights.text};
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';

    background-color: ${theme.colors.darkBlue};

    @media (${theme.breakPoints.small.query}) {
      font-size: 1.8rem;
    }
    @media (${theme.breakPoints.medium.query}) {
      font-size: 2rem;
    }
  }

  a {
    position: relative;
    text-decoration: none;
    color: ${theme.colors.pleasantYellow};

    &:after {
      content: '';
      position: absolute;
      bottom: -0.3rem;
      left: 0;

      height: 2px;
      width: 100%;

      border-radius: 2px;
      background-color: ${theme.colors.pleasantYellow};

      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.2s ease;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 4.75rem 0 1rem;

    line-height: ${theme.lineHeights.heading};
    font-family: ${theme.fonts.sans};
    font-weight: ${theme.fontWeights.heading};
  }

  h1 {
    margin-top: 0;
    font-size: 3.052em;
  }

  h2 {
    font-size: 2.441em;
  }

  h3 {
    font-size: 1.953em;
  }

  h4 {
    font-size: 1.563em;
  }

  h5 {
    font-size: 1.25em;
  }

  p {
    margin-bottom: 1.25em;
  }

  small {
    font-size: 0.75em;
  }

  blockquote {
    margin: 0;
    padding: 0.4rem 3.2rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 0.4rem;
  }

  pre,
  code {
    border-radius: 0.4rem;
  }

  hr {
    border: none;
    border: 1px solid ${theme.colors.lightBlue};
  }

  .gatsby-highlight {
    margin: 2.75rem 0 1rem;
  }

  ::selection {
    color: ${theme.colors.darkBlue};
    background: ${theme.colors.pleasantYellow};
  }

  .scroll-styled-h,
  .scroll-styled-v,
  html {
    scrollbar-color: ${theme.colors.lightBlue} ${theme.colors.darkBlue};
    scrollbar-width: thin;
  }
`;
