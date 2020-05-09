const {createFilePath} = require('gatsby-source-filesystem');

/**
 * Create slugs for `news` nodes
 * {@link https://www.gatsbyjs.org/docs/creating-slugs-for-pages/}
 */
exports.onCreateNode = ({actions: {createNodeField}, getNode, node}) => {
  // if (node.internal.type === 'Mdx') {
  //   const value = createFilePath({
  //     basePath: 'src/news',
  //     getNode,
  //     node,
  //   });
  //   createNodeField({
  //     name: 'slug',
  //     node,
  //     value,
  //   });
  // }
};
