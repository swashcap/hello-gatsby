import React from 'react';
import clsx from 'clsx';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import {
  LiveEditor,
  LiveError,
  LiveProvider,
  LivePreview,
  LiveProviderProps,
} from 'react-live';
import {mdx} from '@mdx-js/react';

import {theme} from './prismTheme';

export interface CodeBlockProps {
  children?: string;
  className?: string;
  language?: string;
  live?: boolean;
  preview?: boolean;
  scope?: LiveProviderProps['scope'];
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  children,
  className,
  language,
  live,
  preview,
  scope: scopeProp,
  ...rest
}) => {
  const lang = (language ||
    (className ?? '').replace(/language-/, '')) as Language;
  const code = children?.trim() || '';
  const scope = {
    ...scopeProp,
    mdx,
  };

  if (live) {
    return (
      <div
        className={clsx(
          'bg-gray-100 border border-gray-300 p-3 rounded-sm',
          className
        )}
        {...rest}
      >
        <LiveProvider code={code} language={lang} scope={scope} theme={theme}>
          <LivePreview />
          <LiveError />
          <LiveEditor />
        </LiveProvider>
      </div>
    );
  } else if (preview) {
    return (
      <div
        className={clsx(
          'bg-gray-100 border border-gray-300 p-3 rounded-sm',
          className
        )}
        {...rest}
      >
        <LiveProvider code={code} language={lang} scope={scope} theme={theme}>
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={lang}
      theme={theme}
      {...rest}
    >
      {({className, getLineProps, getTokenProps, style, tokens}) => (
        <pre
          className={clsx(
            'bg-gray-100 border border-gray-300 p-3 rounded-sm',
            className
          )}
          style={{
            ...style,
          }}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              {line.map((token, j) => (
                <span {...getTokenProps({token, key: j})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
