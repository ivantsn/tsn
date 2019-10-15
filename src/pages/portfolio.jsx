import React from 'react';
import { css } from '@emotion/core';

import { Layout } from '../components/Layout/layout';
import { ProjectPreview } from '../components/ProjectPreview/project-preview';
import { useProjects } from '../hooks/useProjects';
import { SEO } from '../components/Seo/Seo';

const PortfolioPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO />

      <section
        css={theme => css`
          grid-column: 1/5;

          background-image: url(/images/svg/figures/figures.svg);
          background-repeat: no-repeat;
          @media (${theme.breakPoints.medium.query}) {
            grid-column: 2/4;
          }
        `}
      >
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
          quis itaque illo molestiae alias accusamus animi voluptatum reiciendis
          beatae.
        </p>
        {projects.map(project => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </section>
    </Layout>
  );
};

export default PortfolioPage;
