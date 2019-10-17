import { useStaticQuery, graphql } from 'gatsby';

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allPortfolioJson(sort: { order: DESC, fields: order }) {
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
