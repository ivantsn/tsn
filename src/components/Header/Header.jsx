import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useSpring } from 'react-spring';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Container, Nav, Social, Button } from './elements';
import { theme } from '../../theme/theme';

export const Header = () => {
  const [isMenuShown, setShowMenu] = useState(false);
  const windowSize = useWindowSize();
  const slideIn = useSpring({
    transform: isMenuShown
      ? `translateX(0) rotate(0)`
      : `translateX(200%) rotate(90deg)`,
  });

  const nav = [
    {
      href: '/',
      label: 'About',
    },
    {
      href: '/portfolio/',
      label: 'Portfolio',
    },
    {
      href: '/blog/',
      label: 'Blog',
    },
    {
      href: '/contact/',
      label: 'Contact',
    },
  ];

  return (
    <>
      <Container
        style={
          windowSize.width < theme.breakPoints.medium.number ? slideIn : {}
        }
      >
        <Nav>
          {nav.map(({ href, label }) => (
            <Link to={href} key={label} activeClassName="active">
              {label}
            </Link>
          ))}
        </Nav>
        <Social>
          <a
            href="https://github.com/tusnolobov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/svg/icons/github.svg" alt="GitHub"></img>
          </a>
          <a
            href="https://twitter.com/ivan_tusnolobov"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/svg/icons/twitter.svg" alt="Twitter"></img>
          </a>
        </Social>
      </Container>
      <Button onClick={() => setShowMenu(!isMenuShown)} />
    </>
  );
};
