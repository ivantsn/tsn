import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  position: fixed;
  bottom: 14.4rem;
  right: 1.6rem;

  display: flex;
  flex-flow: column nowrap;

  padding: 4rem;
  padding-right: 5.6rem;

  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
  z-index: 9;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    grid-column: 1/2;
    grid-row: 1/2;

    position: sticky;
    top: 2.4rem;
    bottom: unset;
    right: unset;

    width: 100%;
    height: 7.2rem;
    margin-top: 2.4rem;
    padding: 1.6rem 3.2rem;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  & a {
    color: ${({ theme }) => theme.colors.darkBlue};

    &:hover:before {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: inherit;
  align-items: flex-start;
  margin-bottom: 3.2rem;

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    margin-bottom: 0;
  }

  & a {
    margin-bottom: 1.6rem;

    &:last-child {
      margin-bottom: 0;
    }

    &:after {
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }

    @media (${({ theme }) => theme.breakPoints.medium.query}) {
      margin-bottom: 0;
      margin-right: 3.2rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  & .active {
    &:after {
      transform: scaleX(1);
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

    &:after {
      background-color: transparent;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 8rem;
  right: 1.6rem;

  width: 5rem;
  height: 5rem;

  border: none;
  border-radius: 0.4rem;

  background-color: ${({ theme }) => theme.colors.pleasantYellow};
  background-image: url('/images/svg/icons/tap.svg');
  background-position: center;
  background-repeat: no-repeat;

  box-shadow: 0px 0px 2rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  z-index: 9;

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

  @media (${({ theme }) => theme.breakPoints.medium.query}) {
    display: none;
  }
`;
