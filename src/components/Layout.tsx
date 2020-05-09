import React from 'react';
import clsx from 'clsx';

import {Footer} from './Footer';
import {Header} from './Header';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  ...rest
}) => (
  <div className={clsx('flex flex-col min-h-screen', className)} {...rest}>
    <Header className="mb-3 px-1" />
    <main className="flex-grow mb-3 px-3">{children}</main>
    <Footer className="px-3" />
  </div>
);

export default Layout;
