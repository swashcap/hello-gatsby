import React from 'react';
import clsx from 'clsx';

export type AlertVariant = 'error' | 'warning' | 'success';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * `Alert` displays a close button when this property is passed. Response to user-initiated closes by adding an event handler.
   */
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * The alert's visual variant, representing the meaning of the alert.
   *
   * @default 'success'
   */
  variant?: AlertVariant;
}

export default class Alert extends React.Component<AlertProps> {
  private buttonRef = React.createRef<HTMLButtonElement>();

  static defaultProps = {
    variant: 'success',
  };

  /**
   * Focus the Alert's button if present.
   *
   * @public
   */
  focusButton(options?: FocusOptions) {
    if (this.buttonRef.current) {
      this.buttonRef.current.focus(options);
    }
  }

  render() {
    const {children, className, onClose, variant, ...rest} = this.props;

    return (
      <div
        className={clsx(
          'border flex items-center rounded-sm',
          variant === 'error' && 'bg-red-600 border-red-700 text-white',
          variant === 'success' && 'bg-green-600 border-green-700  text-white',
          variant === 'warning' && 'bg-yellow-400 border-yellow-500 text-black',
          className
        )}
        role="alert"
        {...rest}
      >
        <svg
          className="h-4 ml-2 my-1 w-4"
          viewBox="0 0 12 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          {variant === 'error' && (
            <g stroke="currentColor">
              <circle fill="none" stroke-width=".75" cx="6" cy="6" r="5.625" />
              <path stroke-linecap="round" d="M3.5 3.5l5 5M3.5 8.5l5-5" />
            </g>
          )}
          {variant === 'success' && (
            <g fill="none" stroke="currentColor">
              <circle stroke-width=".75" cx="6" cy="6" r="5.625" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 6l2 3 4-5.5"
              />
            </g>
          )}
          {variant === 'warning' && (
            <g fill="currentColor">
              <rect x="5.5" y="5" width="1" height="3.5" rx=".5" />
              <circle cx="6" cy="9.5" r=".5" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-width=".75"
                d="M1 11h10L6 2z"
              />
            </g>
          )}
        </svg>
        <div className="flex-auto px-2 py-1">{children}</div>
        {!!onClose && (
          <button
            aria-label="Close"
            className="leading-none mr-2 px-2 py-1 text-xl focus:opacity-75 hover:opacity-75"
            onClick={onClose}
            ref={this.buttonRef}
            type="button"
          >
            ✕
          </button>
        )}
      </div>
    );
  }
}
