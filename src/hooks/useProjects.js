import { useStaticQuery, graphql } from 'gatsby';

export const useProjects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        nodes {
          preview {
            sharp: childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
          title
          role
          description
          id
          linkText
          link
        }
      }
    }
  `);

  return data.allProjectsJson.nodes;
};
