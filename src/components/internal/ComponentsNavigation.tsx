import React from 'react';
import clsx from 'clsx';
import {graphql, useStaticQuery} from 'gatsby';
import {Link} from './Anchor';
import {Heading} from './Heading';

export type ComponentsNavigationProps = React.HTMLAttributes<HTMLElement>;

export const CompnentsNavigation: React.FC<ComponentsNavigationProps> = ({
  className,
  ...rest
}) => {
  const result = useStaticQuery<{
    allMdx: {
      nodes: Array<{
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
        };
      }>;
    };
  }>(graphql`
    {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/components/external/"}}
        sort: {fields: frontmatter___title}
      ) {
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
  `);

  return (
    <nav className={clsx('text-gray-700', className)} {...rest}>
      <Heading className="mb-0" variant={3}>
        Navigation
      </Heading>
      <ul>
        {result.allMdx.nodes.map(({fields: {slug}, frontmatter: {title}}) => (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
