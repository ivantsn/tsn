import React from 'react';

import {
  Container,
  Preview,
  Info,
  Title,
  Meta,
  StyledLink,
} from './project-preview.styles';

export const ProjectPreview = ({
  project: { title, role, preview, link, linkText, description },
}) => {
  return (
    <Container>
      <Preview src={preview.publicURL} alt={`Preview of ${title} project`} />
      <Info>
        <Title>{title}</Title>
        <Meta>{`Role: ${role}`}</Meta>
        <p>{description}</p>
        <StyledLink href={link} target="_blank" rel="noopener noreferrer">
          {linkText} <i>⇻</i>
        </StyledLink>
      </Info>
    </Container>
  );
};
