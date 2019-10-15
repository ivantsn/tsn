import React from 'react';

export const ProjectPreview = ({
  project: { title, role, preview, link, linkText, description },
}) => {
  return (
    <article>
      <h2>{title}</h2>
      <small>{role}</small>
      <img src={preview.publicURL} alt={`Preview of ${title} project`} />
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {linkText}
      </a>
    </article>
  );
};
