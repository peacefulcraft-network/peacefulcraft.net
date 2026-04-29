/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const sharp = require('sharp');

class EmitWebpAssetsPlugin {
  apply(compiler) {
    compiler.hooks.thisCompilation.tap('EmitWebpAssetsPlugin', (compilation) => {
      compilation.hooks.processAssets.tapPromise(
        {
          name: 'EmitWebpAssetsPlugin',
          stage: compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE_SIZE,
        },
        async () => {
          const assets = compilation.getAssets().filter(({ name }) => /\.(png|jpe?g)$/i.test(name));
          const { RawSource } = compiler.webpack.sources;

          await Promise.all(assets.map(async ({ name, source }) => {
            const webpName = name.replace(/\.(png|jpe?g)$/i, '.webp');
            if (compilation.getAsset(webpName)) {
              return;
            }

            const sourceContent = source.source();
            const inputBuffer = Buffer.isBuffer(sourceContent)
              ? sourceContent
              : Buffer.from(sourceContent);
            const webpBuffer = await sharp(inputBuffer).webp({ quality: 80 }).toBuffer();

            compilation.emitAsset(webpName, new RawSource(webpBuffer));
          }));
        }
      );
    });
  }
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "bin"),
    filename: "app.[chunkhash].js",
    chunkFilename: "[name].bit.[chunkhash].js",
    publicPath: "/"
  },
  devtool: "source-map",
  target: "web",
  devServer: {
    static: path.join(__dirname, 'public'),
    compress: true,
    hot: true
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                quality: 80,
              },
              png: {
                quality: 80,
              },
            },
          },
        },
        test: /\.(jpe?g|png)$/i,
      }),
    ],
    splitChunks: {
      cacheGroups: {
        vendor: { test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all" }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: '*.png', context: 'public' },
        { from: '*.ico', context: 'public' },
        { from: '*.json', context: 'public' },
      ],
    }),
    new StylelintPlugin(),
    new EmitWebpAssetsPlugin(),
  ]
}
