const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");


module.exports = override(
  fixBabelImports("antd-mobile-import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true
  }),
  fixBabelImports("antd-import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: 'css'
  }),
  addWebpackAlias({
    "admin": resolve(__dirname, 'src/admin'),
    "pages": resolve(__dirname, 'src/pages'),
    "lib": resolve(__dirname, 'src/lib'),
    "config": resolve(__dirname, 'src/lib/config'),
    "img": resolve(__dirname, 'src/lib/img'),
    "component": resolve(__dirname, 'src/lib/component'),
  }),
  addLessLoader({
    ident: 'postcss',
    javascriptEnabled: true
  }),
);
