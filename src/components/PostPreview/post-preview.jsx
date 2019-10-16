import React from 'react';
import { Link } from 'gatsby';

import { formatDate } from '../../utils/helpers';
import { Container, Title, Metadata, Spoiler } from './post-preview.styles';

export const PostPreview = ({
  post: { title, date, timeToRead, spoiler, slug },
}) => {
  return (
    <Container>
      <Link to={slug}>
        <Title>{title}</Title>
      </Link>
      <Metadata>
        {formatDate(date)} | {timeToRead} min to read
      </Metadata>

      <Spoiler>{spoiler}</Spoiler>
    </Container>
  );
};
