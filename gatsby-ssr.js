/**
 * Add Tachyons and customize the body class:
 * {@link https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody}
 */
exports.onRenderBody = ({setBodyAttributes, setHeadComponents}) => {
  setBodyAttributes({
    className: 'container mx-auto',
  });
};
