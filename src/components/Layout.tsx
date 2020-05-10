import React from 'react';
import clsx from 'clsx';
import {LocationProvider} from '@reach/router';

import Provider from './Provider';
import {Footer} from './Footer';
import {Header} from './Header';
import {Heading} from './Heading';

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>;

export default class Layout extends React.Component<LayoutProps> {
  render() {
    const {className, children, ...rest} = this.props;

    return (
      <Provider>
        <LocationProvider>
          {({location}) => (
            <div
              className={clsx('flex flex-col min-h-screen', className)}
              {...rest}
            >
              <Header className="mb-4" />
              {location.pathname.includes('/news/') ? (
                <div className="flex flex-grow -mx-3 mb-4 px-4">
                  <main className="px-3 w-full md:w-2/3">{children}</main>
                  <div className="px-3 w-full md:w-1/3">
                    <aside className="bg-gray-200 p-3 text-gray-800">
                      <Heading variant={3}>Sidebar</Heading>
                      <p className="text-sm my-2">
                        This only appears on news pages.
                      </p>
                    </aside>
                  </div>
                </div>
              ) : (
                <main className="flex-grow mb-4 px-4">{children}</main>
              )}
              <Footer />
            </div>
          )}
        </LocationProvider>
      </Provider>
    );
  }
}
