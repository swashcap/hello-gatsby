import React from 'react';
import clsx from 'clsx';
import {MDXProvider, MDXProviderComponentsProp} from '@mdx-js/react';

import {Anchor} from './Anchor';
import {Code} from './Code';
import {Heading} from './Heading';

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

export interface ProviderProps {
  children?: React.ReactNode;
}

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => <MDXProvider components={components}>{children}</MDXProvider>;

export default Provider;
