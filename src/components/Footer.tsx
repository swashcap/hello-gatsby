import React from 'react';
import clsx from 'clsx';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  ...rest
}) => (
  <footer
    className={clsx('border-gray-500 border-t py-2', className)}
    role="contentinfo"
    {...rest}
  >
    <small className="f6 lh-copy">
      An experimental site created with{' '}
      <a className="inline-block underline" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </small>
  </footer>
);
