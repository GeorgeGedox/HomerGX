const manifestOptions = require("./public/assets/manifest.json");

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  },
  publicPath: "",
  pwa: {
    manifestPath: "assets/manifest.json",
    manifestCrossorigin: "use-credentials",
    appleMobileWebAppStatusBarStyle: "black",
    appleMobileWebAppCapable: "yes",
    name: manifestOptions.name,
    themeColor: manifestOptions.theme_color,
    manifestOptions,
    iconPaths: {
      favicon32: "assets/favicons/favicon-32x32.png",
      favicon16: "assets/favicons/favicon-16x16.png",
      appleTouchIcon: "assets/favicons/icon-maskable.png",
      maskIcon: "assets/favicons/safari-pinned-tab.svg",
      msTileImage: "assets/favicons/icon-any.png",
    },
  },
};
