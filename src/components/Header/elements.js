import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  position: fixed;
  bottom: 15vh;
  right: 3vw;

  display: flex;
  flex-flow: column nowrap;
  padding: 3.2rem 5.6rem 3.2rem 3.2rem;

  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  border-radius: 0.4rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);

  & a {
    color: ${({ theme }) => theme.colors.darkBlue};

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      filter: brightness(70%);
    }
  }

  @media (min-width: 600px) {
    left: 50%;
    top: 2.4rem;
    bottom: unset;
    right: unset;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    width: calc(100% - 1.6rem);
    max-width: 86rem;
    padding: 1.6rem 3.2rem;

    transform: translateX(-50%);

    & a {
      margin-right: 2.4rem;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: inherit;
  align-items: flex-start;
  margin-bottom: 3.2rem;

  & a {
    position: relative;
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & .active {
    &::after {
      content: '';
      position: absolute;
      bottom: -0.1rem;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
  }

  @media (min-width: 600px) {
    margin-bottom: 0;

    & a {
      margin-bottom: 0;
    }
  }
`;

export const Social = styled.nav`
  display: block;

  & img {
    width: 100%;
    max-width: 3.2rem;
    vertical-align: middle;
  }

  & a {
    margin-right: 1.6rem;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 4vh;
  right: 3vw;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  background-image: url('/images/svg/icons/tap.svg');
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  &:active {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    transform: scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
