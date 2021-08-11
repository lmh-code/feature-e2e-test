/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
  // on('file:preprocessor', webpack({
  //  webpackOptions: require('@vue/cli-service/webpack.config'),
  //  watchOptions: {}
  // }))

  return Object.assign({}, config, {
    fixturesFolder: "tests/e2e/fixtures", // 包含集成测试配置文件的路径（通过 false 禁用）
    integrationFolder: "tests/e2e/specs", // 包含集成测试文件的路径
    screenshotsFolder: "tests/e2e/screenshots", // 截图文件的路径，包含 cy.screenshot() 命令 和 cypress run测试失败期间保存的屏幕截图。
    videosFolder: "tests/e2e/videos", // 视频文件的路径，用于保存 cypress run运行期间的视频。
    supportFile: "tests/e2e/support/index.js", // 在加载测试文件之前加载文件的路径（通过 false 禁用）
  });
};
