import React from 'react';
import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button's visual variant, representing the importance of the button's invoked action.
   *
   * @default 'primary'
   */
  variant?: ButtonVariant;
}

/**
 * Button, the base interactive element.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, ...rest}, ref) => (
    <button
      className={clsx(
        'border duration-100 rounded-sm text-center transition-colors focus:shadow-xs hover:shadow-xs',
        variant === 'primary' &&
          'bg-blue-600 border-transparent font-semibold px-4 py-1 text-white focus:bg-blue-800 hover:bg-blue-800',
        variant === 'secondary' &&
          'bg-white border-blue-600 px-4 py-1 text-blue-600 focus:border-blue-800 hover:border-blue-800 focus:text-blue-800 hover:text-blue-800',
        variant === 'tertiary' &&
          `bg-white border-gray-400 text-sm text-gray-700 px-2 py-1
      focus:border-gray-600 hover:border-gray-600 focus:text-gray-800
      hover:text-gray-900`,

        className
      )}
      ref={ref}
      {...rest}
    />
  )
);

Button.defaultProps = {
  variant: 'primary',
};

Button.displayName = 'Button';

export default Button;
