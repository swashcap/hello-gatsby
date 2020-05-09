import React from 'react';
import {Link, graphql} from 'gatsby';

import {Layout} from '../../components/Layout';

export interface NewsIndexProps {
  data: Readonly<{
    allMdx: Readonly<{
      nodes: ReadonlyArray<
        Readonly<{
          fileAbsolutePath: string;
          frontmatter: Readonly<{
            title: string;
          }>;
        }>
      >;
    }>;
    allSitePage: Readonly<{
      nodes: ReadonlyArray<
        Readonly<{
          componentPath: string;
          path: string;
        }>
      >;
    }>;
  }>;
}

export default ({data: {allMdx, allSitePage}}: NewsIndexProps) => {
  // Key by `fileAbsolutePath`
  const mdx = allMdx.nodes.reduce<Record<string, {title: string}>>(
    (memo, {fileAbsolutePath, frontmatter}) => {
      memo[fileAbsolutePath] = frontmatter;
      return memo;
    },
    {}
  );
  // Key by `componentPath`
  const page = allSitePage.nodes.reduce<Record<string, {path: string}>>(
    (memo, {componentPath, path}) => {
      memo[componentPath] = {path};
      return memo;
    },
    {}
  );
  const news = Object.keys(page).map((key) => ({
    path: page[key].path,
    title: mdx[key].title,
  }));

  return (
    <Layout>
      <h1 className="font-bold text-2xl mb-4 mt-0">News</h1>
      <ul className="list ma0 pa0">
        {news.map(({path, title}) => (
          <li key={path}>
            <Link className="block px-2 py-1 underline" to={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

// `allSitePage` query necessary for `path` (URL)
// TODO: Why does `mdx` not include slugs/URLs?
export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        fileAbsolutePath
        frontmatter {
          title
        }
      }
    }
    allSitePage(filter: {path: {regex: "/^/news/.+/"}}) {
      nodes {
        path
        componentPath
      }
    }
  }
`;
