const path = require('path');
const {createFilePath} = require('gatsby-source-filesystem');

const directories = {
  components: path.join(__dirname, 'src/components/external'),
  news: path.join(__dirname, 'src/pages/news'),
};

/**
 * Programmatically create pages.
 * {@link https://www.gatsbyjs.org/tutorial/part-seven/}
 * {@link https://www.gatsbyjs.org/docs/node-apis/#createPages}
 */
exports.createPages = async ({actions: {createPage}, graphql}) => {
  const result = await graphql(`
    {
      allMdx(filter: {fileAbsolutePath: {regex: "/components/external/"}}) {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.nodes.forEach(({fields}) => {
    createPage({
      component: path.resolve('./src/components/internal/Template.tsx'),
      context: fields,
      path: fields.slug,
    });
  });
};

/**
 * Create slugs for `news` nodes
 * {@link https://www.gatsbyjs.org/docs/creating-slugs-for-pages/}
 * {@link https://www.gatsbyjs.org/docs/mdx/programmatically-creating-pages/}
 */
exports.onCreateNode = ({actions: {createNodeField}, getNode, node}) => {
  if (node.internal.type === 'Mdx') {
    let value;

    if (node.fileAbsolutePath.includes(directories.news)) {
      value = createFilePath({
        getNode,
        node,
      });
    } else {
      const relativeFilePath = createFilePath({
        basePath: 'src/components/',
        getNode,
        node,
      });

      value = `/components${relativeFilePath.replace('.readme', '')}`;
    }

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};
