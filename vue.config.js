module.exports = {
  publicPath: "/", // 根域上下文目录
  outputDir: "dist", // 构建输出目录
  assetsDir: "assets", // 静态资源目录 (js, css, img, fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  runtimeCompiler: true, // 运行时版本是否需要编译
  transpileDependencies: [], // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  productionSourceMap: true, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  filenameHashing: true,
  chainWebpack: (config) => {
    //打包配置输出文件
    config.output.filename("js/[name].[hash].js").end();
    config.output.chunkFilename("js/[name].[hash].js").end();
  },
  devServer: {
    port: 8082,
    overlay: {
      warnings: false,
      errors: false,
    },
    open: true,
    hot: true,
    compress: true,
  },
};
