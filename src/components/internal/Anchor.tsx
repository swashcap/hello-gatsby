import React from 'react';
import clsx from 'clsx';
import {Link as GatsbyLink, GatsbyLinkProps} from 'gatsby';

export type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor: React.FC<AnchorProps> = ({className, ...rest}) => (
  <a
    className={clsx(
      'text-blue-600 focus:text-blue-800 hover:text-blue-800 underline',
      className
    )}
    {...rest}
  />
);

// TODO: pass `ref`
export const Link = ({
  className,
  ...rest
}: Omit<GatsbyLinkProps<any>, 'ref'>) => (
  <GatsbyLink
    className={clsx(
      'text-blue-600 focus:text-blue-800 hover:text-blue-800 underline',
      className
    )}
    {...rest}
  />
);
