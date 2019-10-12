import styled from '@emotion/styled';

export const Content = styled.main`
  width: 100%;
  background-image: url(/images/svg/logos-mobile.svg);
  background-position: 50% 0%;
  background-repeat: no-repeat;
  padding-top: 32rem;

  @media (min-width: 600px) {
    background-image: url(/images/svg/logos-desktop.svg);
    background-position: 50% -15%;
  }
`;
