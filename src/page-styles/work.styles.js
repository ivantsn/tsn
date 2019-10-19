import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  gap: 3.2em;
`;

export const Header = styled.header`
  max-width: ${({ theme }) => theme.contentWidth}px;
  margin: 0 auto;
`;
