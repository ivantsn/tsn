import React from 'react';
import { css } from '@emotion/core';

export const PostPreview = ({ title, description, timeToRead, slug }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{timeToRead}</p>
      <p>{description}</p>
    </section>
  );
};
