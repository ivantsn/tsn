import styled from '@emotion/styled';

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr minmax(min-content, 86rem) 1fr;
  grid-template-rows: 24rem 1fr;
  gap: 1.6rem;

  @media (min-width: 840px) {
    grid-template-rows: 32rem 1fr;
  }
`;

export const Logos = styled.div`
  height: 100%;
  grid-column: 2/3;
  grid-row: 1/2;

  background-image: url(/images/svg/logos/react.svg),
    url(/images/svg/logos/node.svg), url(/images/svg/logos/js.svg);

  background-position: 0% 100%, 50% -200%, 100% 100%;
  background-repeat: no-repeat;

  @media (min-width: 390px) {
    background-image: url(/images/svg/logos/react.svg),
      url(/images/svg/logos/node.svg), url(/images/svg/logos/js.svg),
      url(/images/svg/logos/gatsby.svg);
    background-position: 0% 100%, 35% -200%, 60% 100%, 100% 200%;
  }

  @media (min-width: 840px) {
    background-position: 0% 100%, 35% 0%, 60% 100%, 100% 0%;
  }
`;
