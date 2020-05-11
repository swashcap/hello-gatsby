import React, {useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@reach/router';

import Alert from '../external/Alert';
import Button from '../external/Button';

const KnobsDemo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => (
  <div className="bg-white flex items-center justify-center p-4 w-full md:w-2/3">
    {children}
  </div>
);

const KnobsForm: React.FC<
  React.FormHTMLAttributes<HTMLFormElement> & {
    controls: any[];
  }
> = ({className, controls, ...rest}) => (
  <form className={clsx('p-4 w-full md:w-1/3', className)}>
    {controls.map((control, index) => {
      const id = `knobs-${index}`;

      return (
        <div className={clsx(index < controls.length - 1 && 'mb-2')}>
          {control.type === 'checkbox' && (
            <>
              <input
                checked={control.value}
                id={id}
                onChange={control.onChange}
                type="checkbox"
              />{' '}
              <label htmlFor={id}>{control.label}</label>
            </>
          )}
          {control.type === 'select' && (
            <>
              <label className="block pb-1" htmlFor={id}>
                {control.label}
              </label>
              <select
                className="border border-gray-600 px-2 py-1 rounded-sm text-black w-full"
                id={id}
                onChange={control.onChange}
                value={control.value}
              >
                {control.options.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </>
          )}
          {control.type === 'text' && (
            <>
              <label className="block pb-1" htmlFor={id}>
                {control.label}
              </label>
              <input
                className="border border-gray-600 px-2 py-1 rounded-sm text-black w-full"
                id={id}
                onChange={control.onChange}
                type="text"
                value={control.value}
              />
            </>
          )}
        </div>
      );
    })}
  </form>
);

export interface KnobProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Knobs: React.FC<KnobProps> = ({className, ...rest}) => {
  const {pathname} = useLocation();
  const [closeable, setCloseable] = useState(false);
  const [children, setChildren] = useState('Sample component.');
  const [variant, setVariant] = useState('success');
  let component;
  let controls;

  // TODO: Make Knobs more flexible
  if (pathname.includes('Alert')) {
    component = (
      <Alert
        children={children}
        onClose={closeable ? console.log : undefined}
        variant={variant}
      />
    );
    controls = [
      {
        onChange: (event) => setChildren(event.target.value),
        label: 'Children',
        type: 'text',
        value: children,
      },
      {
        label: 'Closeable',
        onChange: (event) => setCloseable(!closeable),
        type: 'checkbox',
        value: closeable,
      },
      {
        label: 'Variant',
        onChange: (event) => setVariant(event.target.value),
        options: ['error', 'success', 'warning'],
        type: 'select',
        value: variant,
      },
    ];
  } else {
    component = <Button children={children} variant={variant} />;
    controls = [
      {
        onChange: (event) => setChildren(event.target.value),
        label: 'Children',
        type: 'text',
        value: children,
      },
      {
        label: 'Variant',
        onChange: (event) => setVariant(event.target.value),
        options: ['primary', 'secondary', 'tertiary'],
        type: 'select',
        value: variant,
      },
    ];
  }

  return (
    <div
      className={clsx(
        'bg-gray-100 border flex flex-wrap rounded-sm',
        className
      )}
      {...rest}
    >
      <KnobsDemo>{component}</KnobsDemo>
      <KnobsForm
        controls={controls}
        onSubmit={(event) => event.preventDefault()}
      />
    </div>
  );
};
