import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          timeToRead
          frontmatter {
            title
            slug
            spoiler
            date
          }
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    date: post.frontmatter.date,
    spoiler: post.frontmatter.spoiler,
    timeToRead: post.timeToRead,
  }));
};
