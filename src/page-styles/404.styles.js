import styled from '@emotion/styled';
import Img from 'gatsby-image';

export const Container = styled.article`
  display: flex;
  flex-flow: column wrap;
  align-items: center;

  max-width: ${({ theme }) => theme.breakPoints.medium.number}px;
  margin: 0 auto;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    flex-flow: row nowrap;
  }
`;

export const Header = styled.header`
  display: block;
`;

export const StyledImage = styled(Img)`
  width: 100%;
  max-width: 42rem;
  margin-right: 3.2rem;
`;
