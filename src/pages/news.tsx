import React from 'react';
import {Link, graphql} from 'gatsby';
import {Layout} from '../components/Layout';

export interface NewsProps {
  data: {
    allMdx: {
      edges: {
        node: {
          frontmatter: {
            title: string;
          };
          id: string;
        };
      }[];
    };
  };
}

export default ({data}: NewsProps) => (
  <Layout>
    <h1 className="f2 fw4 lh-title mb2 mt0">News</h1>
    <ul className="list ma0 pa0">
      {data.allMdx.edges.map(({node: {frontmatter: {title}, id}}) => (
        <li key={id}>
          <Link className="color-inherit db dim" to="/">
            {title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
