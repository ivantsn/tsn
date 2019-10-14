import React from 'react';
import { Link } from 'gatsby';

import { formatDate } from '../../utils/helpers';
import { Container, Header, Metadata } from './post-preview.styles';

export const PostPreview = ({
  post: { title, date, timeToRead, spoiler, slug },
}) => {
  return (
    <Container>
      <Header>
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
        <Metadata>
          {formatDate(date)} | {timeToRead} mins to read
        </Metadata>
      </Header>
      <p>{spoiler}</p>
    </Container>
  );
};
