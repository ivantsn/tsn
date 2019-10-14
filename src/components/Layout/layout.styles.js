import { css } from '@emotion/core';
import styled from '@emotion/styled';

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
    background-color: ${theme.colors.darkBlue};
    font-size: 1.8rem;
    font-weight: ${theme.fontWeights.text};
    line-height: ${theme.lineHeights.text};
  }

  a {
    font-weight: ${theme.fontWeights.links};
    color: ${theme.colors.pleasantYellow};
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
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
`;

export const Centered = styled.div`
  grid-row: 1/2;

  display: grid;
  grid-template-columns:
    1fr
    minmax(min-content, ${({ theme }) => theme.breakPoints.large.number}px)
    1fr;
  grid-template-rows: 24rem 1fr auto;
  gap: 1.6rem;
  height: 100vh;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-template-rows: 28rem 1fr auto;
  }
`;

export const Content = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;

  display: grid;
  grid-template-columns: 1fr 3fr 3fr 1fr;
  gap: 3.2rem;

  align-content: flex-start;
`;

export const Logos = styled.div`
  height: 100%;
  grid-column: 2/3;
  grid-row: 1/2;

  background-image: url(/images/svg/logos/react.svg),
    url(/images/svg/logos/node.svg), url(/images/svg/logos/js.svg);

  background-position: 0% 100%, 50% -9rem, 100% 100%;
  background-repeat: no-repeat;

  @media (${({ theme }) => theme.breakPoints.small.query}) {
    background-image: url(/images/svg/logos/react.svg),
      url(/images/svg/logos/node.svg), url(/images/svg/logos/js.svg),
      url(/images/svg/logos/gatsby.svg);
    background-position: 0% 100%, 35% -200%, 60% 100%, 100% 200%;
  }

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    background-position: 0% 100%, 35% 0%, 60% 100%, 100% 0%;
  }
`;
