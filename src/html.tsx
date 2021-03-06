import React from 'react';

export interface HTMLProps {
  htmlAttributes?: React.HtmlHTMLAttributes<HTMLHtmlElement>;
  headComponents?: React.ReactNodeArray;
  bodyAttributes?: React.HTMLAttributes<HTMLBodyElement>;
  preBodyComponents?: React.ReactNodeArray;
  body: string;
  postBodyComponents?: React.ReactNodeArray;
}

export default function HTML(props: HTMLProps) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
