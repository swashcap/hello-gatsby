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
        title: string;
      };
    } | null;
  }>(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header
      className={clsx('border-b border-gray-500', className)}
      role="banner"
      {...rest}
    >
      <Link className="inline-block py-2 underline" rel="home" to="/">
        {query.site?.siteMetadata.title}
      </Link>
    </header>
  );
};
