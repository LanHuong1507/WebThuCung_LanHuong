const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "rc-input",
  "@ant-design/icons",
  "@ant-design/icons-svg",
]);

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
});
