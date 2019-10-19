import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  gap: 3.2em;

  max-width: ${({ theme }) => theme.contentWidth}px;
  margin: 0 auto;
`;

export const Header = styled.header``;

export const Title = styled.h2`
  margin-top: 0;
`;
