import React from 'react';
import clsx from 'clsx';
import {Link, graphql, useStaticQuery} from 'gatsby';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FunctionComponent<HeaderProps> = ({
  className,
  ...rest
}) => {
  const query = useStaticQuery<{
    site: {
      siteMetadata: {
        menuLinks: {
          link: string;
          name: string;
        }[];
        title: string;
      };
    } | null;
  }>(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
          title
        }
      }
    }
  `);

  return (
    <header
      className={clsx(
        'border-b border-gray-500 flex justify-between',
        className
      )}
      role="banner"
      {...rest}
    >
      <Link className="inline-block p-2 underline" rel="home" to="/">
        {query.site?.siteMetadata.title}
      </Link>
      <nav>
        <ul className="flex">
          {query.site?.siteMetadata.menuLinks.map(({link, name}) => (
            <li key={link}>
              <Link className="inline-block p-2 underline" to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
