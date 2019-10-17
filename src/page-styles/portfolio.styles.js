import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  gap: 4rem;

  @media (${({ theme }) => theme.breakPoints.small.query}) {
    gap: 5.2rem;
  }
  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    gap: 6.4rem;
  }
`;

export const Header = styled.header`
  max-width: ${({ theme }) => theme.contentWidth}px;
  margin: 0 auto;
`;
