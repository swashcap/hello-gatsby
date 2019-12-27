const React = require('react');

/**
 * Add Tachyons and customize the body class:
 * {@link https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody}
 */
exports.onRenderBody = ({setBodyAttributes, setHeadComponents}) => {
  setBodyAttributes({
    className: 'lh-copy m0',
  });

  setHeadComponents([
    React.createElement('link', {
      href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css',
      rel: 'stylesheet',
    }),
  ]);
};
