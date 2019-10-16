import React from 'react';

import {
  Container,
  Header,
  Title,
  Role,
  Preview,
  Description,
  LinkStyled,
} from './project-preview.styles';

export const ProjectPreview = ({
  project: { title, role, preview, link, linkText, description },
}) => {
  return (
    <Container>
      <Preview src={preview.publicURL} alt={`Preview of ${title} project`} />
      <Header>
        <Title>{title}</Title>
        <Role>{`Role: ${role}`}</Role>
      </Header>
      <Description>{description}</Description>
      <LinkStyled href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </LinkStyled>
    </Container>
  );
};
