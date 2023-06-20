import path, { resolve } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import autoprefixer from "autoprefixer";
import postcssNesting from "postcss-nesting";
import cssnano from "cssnano";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "minify-lit-html-loader",
            options: {
              htmlMinifier: {
                ignoreCustomFragments: [/<\s/, /<=/],
              },
            },
          },
        ],
        exclude: /node_modules/,
        include: [/template-.*\.ts$/, /template\.ts/],
      },
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },

      {
        test: /\.css$/i,
        use: [
          // {
          // 	loader: 'lit-scss-loader',
          // 	options: {
          // 		// minify: true,
          // 		// transform: (css, { filePath }) => processor.process(css, { from: filePath }).css
          // 	},
          // },
          // "extract-loader",
          // MiniCssExtractPlugin.loader,
          // 'style-loader',
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-import", autoprefixer(), postcssNesting, cssnano()],
              },
            },
          },
          // 'style-loader',
          // 'css-loader',
          // 'resolve-url-loader',
          // {
          // 	loader: 'sass-loader',
          // 	// options: {
          // 	// 	sourceMap: true
          // 	// }
          // }
        ],
        // include: [/node_modules\/leaflet\/dist/, /src/],
        exclude: [/index\.css/],
      },
      {
        test: /index\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
		      "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: ["postcss-import", autoprefixer(), postcssNesting, cssnano()],
              },
            },
          }
        ],
      },
      {
        test: /\.(woff2|png|svg)/,
        type: "asset/resource",
        generator: { filename: '[contenthash][ext]' }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(
		{
			filename: "[name].[contenthash].css"
		}
	),
  ],
  entry: "./src/core/index.ts",
  output: {
    filename: "busplus.bundle.[contenthash].js",
    path: resolve(__dirname, "../dist"),
    // publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
