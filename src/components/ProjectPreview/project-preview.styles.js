import styled from '@emotion/styled';

export const Container = styled.section`
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  gap: 2.4rem;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-template-columns: minmax(30rem, 1fr) 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 3.2rem;
  }
`;

export const Preview = styled.img`
  grid-column: 1/3;
  grid-row: 1/2;

  width: 100%;

  border-radius: 0.4rem;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-row: 1/4;
    grid-column: 1/2;
  }
`;

export const Header = styled.header`
  grid-column: 1/3;
  grid-row: 2/2;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-row: 1/2;
    grid-column: 2/3;
  }
`;

export const Title = styled.h3`
  margin-top: 0;
`;

export const Role = styled.small`
  padding: 0.2rem 1rem;

  color: ${({ theme }) => theme.colors.darkBlue};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 0.2rem;
`;

export const Description = styled.p`
  grid-column: 1/3;
  grid-row: 3/4;

  margin: 0;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export const LinkStyled = styled.a`
  grid-column: 1/3;
  grid-row: 4/5;

  position: relative;
  top: -0.4rem;

  padding: 0.8rem 0;

  text-align: center;
  color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  box-shadow: 0 0.4rem 0 ${({ theme }) => theme.colors.pleasantYellowShadow};

  &:after {
    background-color: transparent;
  }

  &:active {
    top: 0.3rem;
    box-shadow: 0 0.1rem 0 ${({ theme }) => theme.colors.pleasantYellowShadow};
  }

  &:hover:before {
    display: none;
  }

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-column: 2/3;
    grid-row: 3/4;
  }
`;
