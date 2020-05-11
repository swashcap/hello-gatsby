import React from 'react';

import Layout from '../components/internal/Layout';
import {ComponentsNavigation} from '../components/internal/ComponentsNavigation';
import {Heading} from '../components/internal/Heading';

export default class Components extends React.Component<void> {
  render() {
    return (
      <Layout main={false}>
        <div className="flex flex-wrap -mx-3">
          <ComponentsNavigation className="px-3 w-full md:w-1/4 lg:w-2/12" />
          <main className="px-3 w-full md:w-3/4 lg:w-10/12">
            <Heading>Components</Heading>
          </main>
        </div>
      </Layout>
    );
  }
}
