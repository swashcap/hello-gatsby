import React from 'react';
import clsx from 'clsx';
import {MDXProvider, MDXProviderComponentsProp} from '@mdx-js/react';
import {Language} from 'prism-react-renderer';

import {Anchor} from './Anchor';
import {Button} from '../external/Button';
import {CodeBlock} from './CodeBlock';
import {Heading} from './Heading';

const components: MDXProviderComponentsProp = {
  a: (props) => <Anchor {...props} />,
  code: ({children, className, ...rest}: React.HTMLAttributes<HTMLElement>) => {
    const language = className?.replace(/language-/, '') || '';

    if (typeof children !== 'string') {
      console.warn('<pre> children must be a string');
      return null;
    }

    return (
      <CodeBlock
        className="my-4"
        language={language}
        scope={{Button}}
        {...rest}
      >
        {children}
      </CodeBlock>
    );
  },
  h1: (props) => <Heading variant={1} {...props} />,
  h2: (props) => <Heading variant={2} {...props} />,
  h3: (props) => <Heading variant={3} {...props} />,
  h4: (props) => <Heading variant={4} {...props} />,
  h5: (props) => <Heading variant={5} {...props} />,
  h6: (props) => <Heading variant={6} {...props} />,
  ol: ({className, ...rest}) => (
    <ol className={clsx('list-decimal my-4 pl-5', className)} {...rest} />
  ),
  p: ({className, ...rest}) => (
    <p className={clsx('my-4', className)} {...rest} />
  ),
  pre: (props) => <div {...props} />,
  ul: ({className, ...rest}) => (
    <ul className={clsx('list-disc my-4 pl-5', className)} {...rest} />
  ),
};

export interface ProviderProps {
  children?: React.ReactNode;
}

export const Provider: React.FunctionComponent<ProviderProps> = ({
  children,
}) => <MDXProvider components={components}>{children}</MDXProvider>;

export default Provider;
