const path = require('path');

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
        options: {
          extensions: ['.mdx', '.md'],
        },
        path: path.join(__dirname, 'src/pages'),
      },
      resolve: 'gatsby-plugin-page-creator',
    },
    {
      options: {
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
        link: '/news/',
        name: 'News',
      },
      {
        link: '/about/',
        name: 'About',
      },
    ],
    title: 'Hello, Gatsby!',
  },
};
