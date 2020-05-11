import React from 'react';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {graphql} from 'gatsby';

import Layout from './Layout';
import {Anchor} from './Anchor';
import {ComponentsNavigation} from './ComponentsNavigation';
import {Heading} from './Heading';
import {MethodsTable} from './MethodsTable';
import {PropsTable} from './PropsTable';

export interface TemplateProps {
  data: Readonly<{
    mdx: Readonly<{
      body: string;
      fields: Readonly<{
        docgen: string;
      }>;
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
          fields: {docgen},
          frontmatter: {title},
          tableOfContents,
        },
      },
    } = this.props;
    const parsedDocgen = JSON.parse(docgen);

    return (
      <Layout main={false}>
        <div className="flex flex-wrap -mx-3">
          <ComponentsNavigation className="px-3 w-full md:w-1/4 lg:w-2/12" />
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
                    <li>
                      <Anchor className="block" href="#component-api">
                        Component API
                      </Anchor>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="px-3 w-full md:w-2/3 lg:w-3/4">
                <MDXRenderer>{body}</MDXRenderer>
                <Heading id="component-api" variant={2}>
                  Component API
                </Heading>
                {!!parsedDocgen.props && (
                  <>
                    <Heading id="props" variant={3}>
                      Props
                    </Heading>
                    <PropsTable className="my-4" props={parsedDocgen.props} />
                  </>
                )}
                {!!parsedDocgen.methods && (
                  <>
                    <Heading id="methods" variant={3}>
                      Methods
                    </Heading>
                    <MethodsTable
                      className="my-4"
                      methods={parsedDocgen.methods}
                    />
                  </>
                )}
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
      fields {
        docgen
      }
      frontmatter {
        title
      }
      tableOfContents(maxDepth: 2)
    }
  }
`;
