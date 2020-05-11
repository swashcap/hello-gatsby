import React from 'react';
import clsx from 'clsx';

import {Code} from './Code';

export interface PropsTableProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly props: Record<
    string,
    Readonly<{
      defaultValue?: Readonly<{
        value: string;
      }>;
      description?: string;
      name: string;
      parent?: Readonly<{
        filename: string;
        name: string;
      }>;
      required: boolean;
      type: any;
    }>
  >;
}

export const PropsTable: React.FC<PropsTableProps> = ({
  className,
  props,
  ...rest
}) => (
  <table
    className={clsx('border-collapse border-gray-300 w-full', className)}
    {...rest}
  >
    <thead className="align-top border-b text-left">
      <th className="p-2">Name</th>
      <th className="p-2">Type</th>
      <th className="p-2">Default value</th>
      <th className="p-2">Description</th>
      <th className="p-2">Required?</th>
    </thead>
    <tbody className="align-top">
      {Object.keys(props).map((key) => {
        const prop = props[key];

        return (
          <tr className="border-b" key={key}>
            <th className="font-normal p-2" scope="row">
              <Code>{prop.name}</Code>
            </th>
            <td className="p-2">
              <Code>{prop.type.name}</Code>
            </td>
            <td className="p-2">
              {!!prop.defaultValue && <Code>{prop.defaultValue.value}</Code>}
            </td>
            <td className="p-2 text-sm">{prop.description}</td>
            <td className="p-2 text-sm">
              {prop.required ? (
                <span aria-label="Required">Yes</span>
              ) : (
                <span aria-label="Not required">No</span>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);
