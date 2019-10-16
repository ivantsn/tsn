import styled from '@emotion/styled';

export const Container = styled.article`
  display: grid;
  gap: 1.6rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas:
    'preview'
    'info';

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-template-columns: 32rem 1fr;
    grid-template-rows: 1fr;
    gap: 2.4rem;
    grid-template-areas:
      'preview info'
      'preview info';
  }
`;

export const Preview = styled.img`
  grid-area: preview;

  width: 100%;
  border-radius: 0.4rem;
`;

export const Info = styled.section`
  grid-area: info;

  display: grid;
  grid-template-rows: auto auto 1fr auto;
  gap: 0;
  justify-items: flex-start;
`;

export const Title = styled.h2`
  margin-top: 0;
  word-break: break-word;
`;

export const Meta = styled.small`
  padding: 0.2rem 1rem;

  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.2rem;
`;
