import React from 'react';
import clsx from 'clsx';
import {MDXProvider, MDXProviderComponentsProp} from '@mdx-js/react';

import {Anchor} from './Anchor';
import {Code} from './Code';
import {Footer} from './Footer';
import {Header} from './Header';
import {Heading} from './Heading';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

const components: MDXProviderComponentsProp = {
  a: (props) => <Anchor {...props} />,
  code: (props) => <Code {...props} />,
  h1: (props) => <Heading variant={1} {...props} />,
  h2: (props) => <Heading variant={2} {...props} />,
  h3: (props) => <Heading variant={3} {...props} />,
  h4: (props) => <Heading variant={4} {...props} />,
  h5: (props) => <Heading variant={5} {...props} />,
  h6: (props) => <Heading variant={6} {...props} />,
  p: ({className, ...rest}) => (
    <p className={clsx('my-4', className)} {...rest} />
  ),
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  className,
  children,
  ...rest
}) => (
  <MDXProvider components={components}>
    <div className={clsx('flex flex-col min-h-screen', className)} {...rest}>
      <Header className="mb-4" />
      <main className="flex-grow mb-4 px-4"> {children} </main>
      <Footer />
    </div>
  </MDXProvider>
);

export default Layout;
