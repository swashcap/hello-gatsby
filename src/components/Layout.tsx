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
  <div
    className={clsx('center flex flex-column mw8', className)}
    style={{minHeight: '100vh'}}
    {...rest}
  >
    <Header className="mb2 ph3" />
    <main className="mb2 ph3" style={{flexGrow: 2}}>
      {children}
    </main>
    <Footer className="ph3" />
  </div>
);
