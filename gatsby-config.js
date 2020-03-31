const path = require('path');

const newsPath = path.join(__dirname, 'src/news');

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
        name: 'news',
        path: newsPath,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        options: {
          extensions: ['.mdx', '.md'],
        },
        path: newsPath,
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
    title: 'Hello, Gatsby!',
  },
};
