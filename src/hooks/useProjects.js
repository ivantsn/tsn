import { useStaticQuery, graphql } from 'gatsby';

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allPortfolioJson {
        nodes {
          title
          role
          link
          linkText
          id
          description
          preview {
            publicURL
          }
        }
      }
    }
  `);

  return data.allPortfolioJson.nodes;
};
