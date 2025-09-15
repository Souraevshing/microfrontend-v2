const {merge} = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const BASE_URL = process.env.PRODUCT_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${BASE_URL}/marketing/remoteEntry.js`,
                auth: `auth@${BASE_URL}/auth/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(prodConfig, commonConfig)