import styled from '@emotion/styled';

export const Container = styled.section`
  grid-column: 1/5;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-column: 2/4;
  }
`;
