import React from 'react';

import {
  Container,
  Preview,
  PreviewSvg,
  Info,
  Title,
  Meta,
  StyledLink,
} from './project-preview.styles';

export const ProjectPreview = ({
  project: { title, role, preview, link, linkText, description },
}) => {
  const alt = `Preview of ${title} project`;

  return (
    <Container>
      {preview.sharp ? (
        <Preview fluid={preview.sharp.fluid} fadeIn alt={alt} />
      ) : (
        <PreviewSvg src={preview.publicURL} alt={alt} />
      )}
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
