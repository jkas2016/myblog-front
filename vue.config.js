// 경로: 루트 디렉토리/vue.config.js
const path = require( 'path' );
// const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin;

module.exports = {
    // in order to skip the source map generation
    productionSourceMap  : false,
    configureWebpack     : {
        plugins: [
            // new BundleAnalyzerPlugin(),
        ],
        resolve: {
            alias: {
                "@": path.join( __dirname, 'src/' ),
            }
        },
    },
    transpileDependencies: [
        "vuetify",
        "luxon"
    ],
}