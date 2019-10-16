import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { Link } from 'gatsby';
import { useTheme } from 'emotion-theming';

import { useWindowSize } from '../../hooks/useWindowSize';
import { navigationData } from './navigation.data';
import { Container, Nav, Social, Button } from './navigation.styles';

export const Navigation = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();

  const [isMenuShown, setShowMenu] = useState(false);

  const slideIn = useSpring({
    transform: isMenuShown
      ? `translateX(0) rotate(0)`
      : `translateX(200%) rotate(90deg)`,
  });

  return (
    <>
      <Container
        style={
          windowSize.width < theme.breakPoints.medium.number ? slideIn : {}
        }
      >
        <Nav>
          {navigationData.siteNav.map(({ href, label }) => (
            <Link to={href} key={label} activeClassName="active">
              {label}
            </Link>
          ))}
        </Nav>
        <Social>
          {navigationData.social.map(({ title, link, icon }) => {
            return (
              <a href={link} key={title}>
                <img src={icon} alt={title} key={title} />
              </a>
            );
          })}
        </Social>
      </Container>
      <Button
        onClick={() => setShowMenu(!isMenuShown)}
        title="Toggle Navigation"
      />
    </>
  );
};
