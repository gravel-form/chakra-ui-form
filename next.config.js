/* eslint-disable */
const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  ...withCss(
    withLess({
      env: {
        BACKEND_URL: isProduction ? '/chakra-ui-form' : '',
      },
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
      assetPrefix: isProduction ? '/chakra-ui-form' : '',
    })
  ),
};
