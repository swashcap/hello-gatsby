const path = require('path');
const reactDocgenTypeScript = require('react-docgen-typescript');
const {createFilePath} = require('gatsby-source-filesystem');

const directories = {
  components: path.join(__dirname, 'src/components/external'),
  news: path.join(__dirname, 'src/pages/news'),
};

const {parse} = reactDocgenTypeScript.withCustomConfig(
  path.join(__dirname, 'tsconfig.json'),
  {
    propFilter(prop) {
      if (prop.parent) {
        return !prop.parent.fileName.includes('node_modules');
      }

      return true;
    },
  }
);

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
    if (node.fileAbsolutePath.includes(directories.news)) {
      const value = createFilePath({
        getNode,
        node,
      });

      createNodeField({
        name: 'slug',
        node,
        value,
      });
    } else {
      const relativeFilePath = createFilePath({
        basePath: 'src/components/',
        getNode,
        node,
      });

      createNodeField({
        name: 'slug',
        node,
        value: `/components${relativeFilePath.replace('.readme', '')}`,
      });

      const parsed = parse(
        node.fileAbsolutePath.replace('.readme.mdx', '.tsx')
      );

      createNodeField({
        name: 'docgen',
        node,
        // Stringify to prevent Gatsby's aggressive GraphQL schema provision
        value:
          Array.isArray(parsed) && parsed.length
            ? JSON.stringify(parsed[0])
            : JSON.stringify(null),
      });
    }
  }
};
