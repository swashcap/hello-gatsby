import React from 'react';
import clsx from 'clsx';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  ...rest
}) => (
  <footer
    className={clsx('border-gray-300 border-t px-4 py-3', className)}
    role="contentinfo"
    {...rest}
  >
    <small className="block leading-snug text-sm text-gray-700">
      An experimental site created with{' '}
      <a
        className="focus:text-blue-800 hover:text-blue-800 underline"
        href="https://www.gatsbyjs.org"
      >
        Gatsby
      </a>
      . Source code{' '}
      <a
        aria-label="This site's source code on GitHub"
        className="focus:text-blue-800 hover:text-blue-800 underline"
        href="https://github.com/swashcap/hello-gatsby"
      >
        on GitHub
      </a>
      .
    </small>
  </footer>
);
