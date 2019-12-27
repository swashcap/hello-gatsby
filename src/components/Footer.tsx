import React from 'react';
import clsx from 'clsx';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer: React.FunctionComponent<FooterProps> = ({
  className,
  ...rest
}) => (
  <footer className={clsx(className)} role="contentinfo" {...rest}>
    <small>sup</small>
  </footer>
);
