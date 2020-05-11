import React, {useState} from 'react';
import {useLocation} from '@reach/router';

import Alert from '../external/Alert';
import Button from '../external/Button';
import {CodeBlock} from './CodeBlock';

export interface PreviewProps {
  props: Array<{
    children: string;
    variant: string;
  }>;
}

export const Preview: React.FC<PreviewProps> = ({props}) => {
  const {pathname} = useLocation();
  let children: string;

  // TODO: Make Knobs more flexible
  if (pathname.includes('Alert')) {
    children = `
      <div>
        ${props
          .map(
            ({children, variant}, index) => `<div ${
              index < props.length - 1 ? 'className="mb-2"' : ''
            }>
  <Alert variant="${variant}">${children}</Alert>
</div>`
          )
          .join('\n')}
      </div>`;
  } else {
    children = `
      <div>
        ${props
          .map(
            ({children, variant}) => `<div className="mb-2">
  <Button variant="${variant}">${children}</Button>
</div>`
          )
          .join('\n')}
      </div>`;
  }

  return (
    <CodeBlock
      children={children}
      language="tsx"
      preview
      scope={{Alert, Button}}
    />
  );
};
