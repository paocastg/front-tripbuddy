module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, options) => {
    const originalEntry = config.entry

    config.module.rules.push({
      test: [/\.gif$/, /\.jpe?g$/, /\.png$/],
      loader: require.resolve('url-loader'),
      options: {
        limit: false,
        name: "[path][name].[hash:8].[ext]",
        // publicPath: isLocal ? "http://localhost:8080" : process.env.CDN_PATH,
        publicPAth: 'http://localhost:3030'
      },
    });

    // IE 11
    config.entry = async () => {
      const entries = await originalEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift("@babel/polyfill");
        entries['main.js'].unshift('./node_modules/url-polyfill/url-polyfill.js')
      }

      return entries
    }

    return config
  }
}