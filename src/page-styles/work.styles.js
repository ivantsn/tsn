import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  gap: 4em;

  /* @media (${({ theme }) => theme.breakPoints.small.query}) {
    gap: 6.4rem;
  }
  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    gap: 7.2rem;
  } */
`;

export const Header = styled.header`
  max-width: ${({ theme }) => theme.contentWidth}px;
  margin: 0 auto;
`;
