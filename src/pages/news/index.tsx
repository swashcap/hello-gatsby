import React from 'react';
import {Link, graphql} from 'gatsby';

import Layout from '../../components/Layout';

export interface NewsIndexProps {
  data: Readonly<{
    allMdx: Readonly<{
      nodes: ReadonlyArray<
        Readonly<{
          fields: Readonly<{
            slug: string;
          }>;
          frontmatter: Readonly<{
            title: string;
          }>;
        }>
      >;
    }>;
  }>;
}

export default ({
  data: {
    allMdx: {nodes},
  },
}: NewsIndexProps) => (
  <Layout>
    <h1 className="font-bold text-2xl mb-4 mt-0">News</h1>
    <ul className="list ma0 pa0">
      {nodes.map(({fields: {slug}, frontmatter: {title}}) => (
        <li key={slug}>
          <Link className="block px-2 py-1 underline" to={slug}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`;
