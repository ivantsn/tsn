import styled from '@emotion/styled';

export const Container = styled.article`
  grid-column: 1/5;
  margin-bottom: 4.8rem;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-column: 2/4;
  }
`;

export const Header = styled.header`
  margin-bottom: 0.8rem;
`;

export const Metadata = styled.small`
  font-size: 1.4rem;
  opacity: 0.7;
`;
