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
  addLessLoader({
    ident: 'postcss'
  }),
);
