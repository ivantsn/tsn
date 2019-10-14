module.exports = {
  siteMetadata: {
    title: 'Ivan Tusnolobov | Web Developer & Designer',
    author: 'Ivan Tusnolobov',
    description:
      'Personal site of Ivan Tusnolobov. He builds things for the Web.',
    siteUrl: 'https://tusnolobov.com',
    social: {
      twitter: '@ivan_tusnolobov',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          blog: require.resolve('./src/components/Layout/layout.jsx'),
        },
        gatsbyRemarkPlugins: ['gatsby-remark-images'],
        plugins: ['gatsby-remark-images'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ivan Tusnolobov',
        short_name: 'Ivan Tusnolobov',
        start_url: '/',
        theme_color: '#f2da79',
        background_color: '#263368',
        display: 'minimal-ui',
        theme_color_in_head: false,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
  ],
};
