import styled from '@emotion/styled';

export const Container = styled.article`
  max-width: ${({ theme }) => theme.breakPoints.medium.number}px;
  margin: 0 auto;
  & img {
    max-width: 100%;
    margin: 1.6rem 0 0.8rem;
    border-radius: 0.4rem;
  }
`;

export const Header = styled.header`
  margin-bottom: 2.75rem;
`;
