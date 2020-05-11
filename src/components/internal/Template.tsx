import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';

import {Anchor} from './Anchor';
import {Heading} from './Heading';
import Layout from './Layout';

export interface TemplateProps {
  data: Readonly<{
    mdx: Readonly<{
      body: string;
      frontmatter: Readonly<{
        title: string;
      }>;
      tableOfContents: Readonly<{
        items?: ReadonlyArray<
          Readonly<{
            title: string;
            url: string;
          }>
        >;
      }>;
    }>;
  }>;
}

export default class Template extends React.Component<TemplateProps> {
  render() {
    const {
      data: {
        mdx: {
          body,
          frontmatter: {title},
          tableOfContents,
        },
      },
    } = this.props;

    return (
      <Layout main={false}>
        <div className="flex flex-wrap -mx-3">
          <nav className="px-3 w-full md:w-1/4 lg:w-2/12">Navigation</nav>
          <main className="px-3 w-full md:w-3/4 lg:w-10/12">
            <Heading>{title}</Heading>
            <div className="flex flex-wrap -mx-3">
              <nav className="px-3 w-full md:order-2 md:w-1/3 lg:w-1/4">
                <div className="text-gray-700">
                  <Heading variant={3}>Contents:</Heading>
                  <ul>
                    {tableOfContents.items?.map(({title, url}) => (
                      <li key={url}>
                        <Anchor className="block" href={url}>
                          {title}
                        </Anchor>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
              <div className="px-3 w-full md:w-2/3 lg:w-3/4">
                <MDXRenderer>{body}</MDXRenderer>
              </div>
            </div>
          </main>
        </div>
      </Layout>
    );
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
