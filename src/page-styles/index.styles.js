import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const flicker = keyframes`
  0% { opacity: 0.1 }
  20% { opacity: 1 }
  40% { opacity: 0.5 }
  80% { opacity: 1 }
  100% { opacity: 0.1 }
`;

export const Container = styled.article`
  display: flex;
  align-items: center;
`;

export const ImageContainer = styled.picture`
  display: none;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    position: relative;

    display: block;
    width: 41.2rem;
    margin-right: 3.2rem;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/images/svg/laptop-light.svg);
      background-position: initial;
      background-repeat: no-repeat;
      animation: ${flicker} 4s ease infinite;
    }
  }
`;
