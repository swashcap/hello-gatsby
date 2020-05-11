const path = require('path');

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /**
   * Prefix path for GH pages.
   * {@link https://www.gatsbyjs.org/docs/gatsby-config/#pathprefix}
   */
  pathPrefix: process.env.NODE_ENV === 'production' ? '/hello-gatsby' : '',
  polyfill: false,
  plugins: [
    'gatsby-plugin-typescript',
    {
      options: {
        name: 'pages',
        path: path.join(__dirname, 'src/pages'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        name: 'components',
        path: path.join(__dirname, 'src/components/external'),
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        options: {
          extensions: ['.mdx', '.md'],
        },
        path: path.join(__dirname, 'src/pages'),
      },
      resolve: 'gatsby-plugin-page-creator',
    },
    {
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/internal/Layout.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-transformer-remark',
          },
        ],
      },
      resolve: 'gatsby-plugin-mdx',
    },

    /**
     * Customize PostCSS
     * {@link https://www.gatsbyjs.org/docs/post-css/}
     */
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env'), require('tailwindcss')],
      },
    },
  ],
  siteMetadata: {
    menuLinks: [
      {
        link: '/about/',
        name: 'About',
      },
      {
        link: '/components/',
        name: 'Components',
      },
      {
        link: '/news/',
        name: 'News',
      },
    ],
    title: 'Hello, Gatsby!',
  },
};
