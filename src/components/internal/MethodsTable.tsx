import React from 'react';
import clsx from 'clsx';
import {Code} from './Code';

export interface MethodsTableProps
  extends React.HTMLAttributes<HTMLDivElement> {
  methods: ReadonlyArray<
    Readonly<{
      description?: string;
      docblock: string;
      modifiers: any[];
      name: string;
      params: ReadonlyArray<
        Readonly<{
          description?: any;
          name: string;
          type: Readonly<{
            name: string;
          }>;
        }>
      >;
      returns: string | null;
    }>
  >;
}

export const MethodsTable: React.FC<MethodsTableProps> = ({
  className,
  methods,
  ...rest
}) => (
  <table className={clsx('border-collapse border-gray-300 w-full')} {...rest}>
    <thead className="align-top border-b text-left">
      <th className="p-2">Name</th>
      <th className="p-2">Description</th>
      <th className="p-2">Parameters</th>
      <th className="p-2">Return type</th>
    </thead>
    <tbody className="align-top">
      {methods.map(({description, name, params, returns}) => (
        <tr key={name}>
          <th className="font-normal p-2 text-left" scope="row">
            <Code>{name}</Code>
          </th>
          <td className="p-2 text-sm">{description}</td>
          <td className="p-2">
            {!!params.length && (
              <dl>
                {params.map(({description, name, type}) => (
                  <React.Fragment key={name}>
                    <dt>
                      <Code>
                        {name}: {type.name}
                      </Code>
                    </dt>
                    <dd>{description}</dd>
                  </React.Fragment>
                ))}
              </dl>
            )}
          </td>
          <td className="p-2">
            <Code>{returns ? returns : 'void'}</Code>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
