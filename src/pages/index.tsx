import React from 'react';

import Layout from '../components/internal/Layout';
import {Anchor, Link} from '../components/internal/Anchor';
import {Code} from '../components/internal/Code';
import {Heading} from '../components/internal/Heading';

export default () => (
  <Layout>
    <div className="flex flex-wrap -mx-3">
      <div className="md:w-1/3 px-3">
        <Heading>Hello, Gatsby!</Heading>
        <p className="my-4">
          This is an experimental site to test Gatsby's capabilities.
        </p>
        <p className="my-4">So far:</p>
        <ul className="list-disc my-4 pl-5">
          <li>
            Add <Anchor href="https://tailwindcss.com/">tailwindcss</Anchor>
          </li>
          <li>
            Add blog posts to <Code>/news/</Code>
          </li>
          <li>
            Add a{' '}
            <Link to="/news/">
              <Code>/news/</Code> index
            </Link>
          </li>
          <li>
            Customize <Code>MDXProvider</Code>
          </li>
        </ul>
      </div>
      <div className="md:w-1/3 px-3">
        <img
          alt="A placeholder kitten"
          className="block w-full"
          src="//placekitten.com/400/400"
        />
      </div>
    </div>
  </Layout>
);
