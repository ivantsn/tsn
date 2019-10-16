import React from 'react';

import { Layout } from '../components/Layout/layout';
import { ProjectPreview } from '../components/ProjectPreview/project-preview';
import { useProjects } from '../hooks/useProjects';
import { SEO } from '../components/Seo/Seo';

import { Container, Header } from '../page-styles/portfolio.styles';

const PortfolioPage = () => {
  const projects = useProjects();
  return (
    <Layout>
      <SEO />
      <Container>
        <Header>
          <h1>Portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sed
            quis itaque illo molestiae alias accusamus animi voluptatum
            reiciendis beatae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ut.
          </p>
        </Header>
        {projects.map(project => (
          <ProjectPreview key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
