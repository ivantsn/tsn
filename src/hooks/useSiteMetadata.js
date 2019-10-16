import { graphql, useStaticQuery } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          image
          organization {
            logo
            name
            url
          }
          siteUrl
          social {
            fbAppID
            twitter
          }
          title
        }
      }
    }
  `);
  return data.site.siteMetadata;
};
