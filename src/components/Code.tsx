import React from 'react';
import clsx from 'clsx';

export type CodeProps = React.HTMLAttributes<HTMLElement>;

export const Code: React.FC<CodeProps> = ({className, ...rest}) => (
  <code
    className={clsx(
      'bg-gray-100 p-1 rounded-sm text-red-700 text-sm',
      className
    )}
    {...rest}
  />
);
