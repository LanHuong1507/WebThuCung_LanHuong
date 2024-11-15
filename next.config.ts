const withTM = require("next-transpile-modules")([
  "rc-util",
  "rc-pagination",
  "rc-picker",
  "@ant-design/icons",
  "@ant-design/icons-svg",
]);

module.exports = withTM({
  // Your other Next.js config options
});
