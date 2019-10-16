import styled from '@emotion/styled';

export const Container = styled.header`
  grid-column: 1/2;
  grid-row: 1/2;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto;
`;

export const Logos = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;

  height: 100%;
  background-image:
    url(/images/svg/logos/react.svg),
    url(/images/svg/logos/js.svg),
    url(/images/svg/logos/gatsby.svg);

  background-position: 0 -11rem, 50% -22rem, 100% 0;
  background-repeat: no-repeat;

  @media (${({ theme }) => theme.breakPoints.small.query}) {
    background-image: 
      url(/images/svg/logos/react.svg),
      url(/images/svg/logos/node.svg),
      url(/images/svg/logos/js.svg),
      url(/images/svg/logos/gatsby.svg);
    background-position: 0 -2rem, 35% 0, 60% -3rem, 100% 0;
  }

  /* @media (${({ theme }) => theme.breakPoints.medium.query}) {
    
  } */
`;
