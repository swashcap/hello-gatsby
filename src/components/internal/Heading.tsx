import React from 'react';
import clsx from 'clsx';

export type HeadingVariant = 1 | 2 | 3;

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /**
   * The `Heading`'s root element.
   * @default 'h1'
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  variant?: HeadingVariant;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h1',
  className,
  variant = 1,
  ...rest
}) => (
  <Component
    className={clsx(
      variant === 1 &&
        'text-2xl md:text-4xl font-medium leading-tight mb-4 mt-4',
      variant === 2 && 'text-xl md:text-2xl font-medium leading-snug mb-4',
      variant === 3 && 'text-base md:text-lg font-medium leading-snug mb-4',
      className
    )}
    {...rest}
  />
);
