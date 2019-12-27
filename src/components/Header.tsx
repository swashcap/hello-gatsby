import React from 'react';
import clsx from 'clsx';
import {graphql, useStaticQuery} from 'gatsby';

export type HeaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Header: React.FunctionComponent<HeaderProps> = ({
  className,
  ...rest
}) => {
  const query = useStaticQuery<{
    site?: {
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
    <header className={clsx(className)} role="banner" {...rest}>
      {query.site?.siteMetadata.title}
    </header>
  );
};
