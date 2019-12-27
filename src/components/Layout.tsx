import React from 'react';
import clsx from 'clsx';

import {Footer} from './Footer';
import {Header} from './Header';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

export const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  ...rest
}) => (
  <div className={clsx('center mw8 ph3', className)} {...rest}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);
