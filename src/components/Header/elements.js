import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const Container = styled(animated.header)`
  position: fixed;
  bottom: 15vh;
  right: 3vw;

  display: flex;
  flex-flow: column nowrap;
  padding: ${({ theme }) => theme.sizes.md[0]}px;

  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);

  & a {
    color: ${({ theme }) => theme.colors.background};

    &:last-child {
      margin-right: ${({ theme }) => theme.sizes.sm[0]}px;
    }

    &:hover {
      filter: brightness(70%);
    }
  }

  @media (min-width: 600px) {
    left: 50%;
    top: ${({ theme }) => theme.sizes.sm[3]}px;
    bottom: unset;
    right: unset;

    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    width: 90%;
    max-width: ${({ theme }) => theme.maxWidth}px;
    padding: ${({ theme }) => theme.sizes.sm[2]}px
      ${({ theme }) => theme.sizes.md[0]}px;

    transform: translateX(-50%);

    & a {
      margin-right: ${({ theme }) => theme.sizes.sm[2]}px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-flow: inherit;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.sizes.sm[3]}px;

  & a {
    margin-bottom: ${({ theme }) => theme.sizes.sm[2]}px;
  }

  & .active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.background};
  }

  @media (min-width: 600px) {
    margin-bottom: ${({ theme }) => theme.sizes.sm[0]}px;

    & a {
      margin-bottom: ${({ theme }) => theme.sizes.sm[0]}px;
    }
  }
`;

export const Social = styled.nav`
  display: block;

  & img {
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.md[0]}px;
    vertical-align: middle;
  }

  & a {
    margin-right: 10px;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 4vh;
  right: 3vw;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.accent};
  background-image: url('/icons/tap.svg');
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
