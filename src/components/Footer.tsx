import React from 'react';
import clsx from 'clsx';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  ...rest
}) => (
  <footer
    className={clsx('b--black-20 bt pv2', className)}
    role="contentinfo"
    {...rest}
  >
    <small className="f6 lh-copy">
      An experimental site created with{' '}
      <a className="color-inherit dim" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </small>
  </footer>
);
