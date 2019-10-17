module.exports = {
  siteMetadata: {
    title: 'Ivan Tusnolobov • Developer & Designer',
    author: 'Ivan Tusnolobov',
    description:
      'Ivan Tusnolobov is a developer and designer from Moscow, Russia',
    siteUrl: 'https://tusnolobov.com',
    image: 'https://tusnolobov.com/images/og-image.jpg',
    social: {
      twitter: '@ivan_tusnolobov',
      fbAppID: '',
    },
    organization: {
      name: 'Ivan Tusnolobov',
      url: 'https://tusnolobov.com',
      logo: 'https://tusnolobov.com/android-chrome-512x512.png',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',

    'gatsby-plugin-offline',
    'gatsby-plugin-netlify',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          blog: require.resolve('./src/components/Layout/layout.jsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: `margin-bottom: 1.6rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: `https://tusnolobov.com`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects/`,
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
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-150277390-1',
      },
    },
  ],
};
