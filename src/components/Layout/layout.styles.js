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

    background-color: ${theme.colors.darkBlue};
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
    font-weight: ${theme.fontWeights.links};
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
    line-height: ${theme.lineHeights.heading};
    font-family: ${theme.fonts.sans};
    font-weight: ${theme.fontWeights.heading};
  }

  h1 {
    margin-top: 0;
    margin-bottom: calc(1em / 2.827 * 1.5);
    font-size: 2.827em;
  }

  h2 {
    margin-top: calc(1em / 1.999 * 4.5);
    margin-bottom: calc(1em / 1.999 * 1.5);
    font-size: 1.999em;
  }

  h3 {
    margin-top: calc(1em / 1.414 * 4.5);
    margin-bottom: calc(1em / 1.414 * 1.5);
    font-size: 1.414em;
  }

  p {
    margin-top: 0;
    margin-bottom: 1em;
    hanging-punctuation: first;
  }

  small {
    margin-bottom: 0.8em;
    font-size: 0.75em;
  }

  blockquote {
    margin: 0;
    margin-top: 2.4em;
    margin-bottom: 2.4em;
    padding-left: 2em;
    letter-spacing: 0.02em;
    font-style: italic;
  }

  pre,
  code {
    border-radius: 0.4rem;
  }

  hr {
    margin: 2.4em 0;
    border: none;
    border: 1px solid ${theme.colors.lightBlue};
  }

  .gatsby-highlight {
    margin-top: 2.4em;
    margin-bottom: 2.4em;
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
