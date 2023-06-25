import common from './webpack.common.js';
import webpack from 'webpack';
import { merge }  from 'webpack-merge';

import TerserPlugin from 'terser-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { InjectManifest } from "workbox-webpack-plugin";

import { BundleAnalyzerPlugin }  from 'webpack-bundle-analyzer';

export default merge(common, {
    output: {
        filename: 'busplus.bundle.[contenthash].js',
    },
	plugins: [
        new CleanWebpackPlugin(),   
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 1
        }),
        new InjectManifest({
            swSrc: './static/service-worker.js',
            swDest: 'service-worker.js',
            maximumFileSizeToCacheInBytes: 10485760,
            exclude: [/staticwebapp\.config\.json$/, /index\.html$/],
        }),
        new CopyPlugin({
            patterns: [
              {
                from: "./staticwebapp.config.json",
                to: "./",
              },
              {
                from: "./static/*.*",
                to: "./[name][ext]",
              },
              {
                from: "./static/icons/*.*",
                to: "./icons/[name][ext]",
              }
            ]
        }),
        new BundleAnalyzerPlugin()
    ],
	optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js$/,
                extractComments: false,
                terserOptions: {
                    compress: {
                        drop_console: true,
                        unsafe: true
                    },
                    mangle: true,
                    output: {
                        comments: false,
                        beautify: false,
                    }
                },
            })
        ],
    },
	// devtool: 'source-map'
});