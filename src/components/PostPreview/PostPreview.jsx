import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

export const PostPreview = ({
  post: { title, timeToRead, description, slug },
}) => {
  return (
    <article
      css={theme => css`
        grid-column: 1/5;

        @media (${theme.breakPoints.medium.query}) {
          grid-column: 2/4;
        }
      `}
    >
      <Link to={`blog/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>{timeToRead} mins to read</p>
      <p>{description}</p>
    </article>
  );
};
