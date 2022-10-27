const path = require(`path`);
const { ProvidePlugin } = require('webpack');
const webpack = require('webpack');
const { alias } = require(`./src/Config/aliases`);
const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
	Object.entries(aliases).map(([key, value]) => [
		key,
		path.resolve(__dirname, value),
	])
);

export default {
	webpack: {
		alias: resolvedAliases,
		configure: {
			ignoreWarnings: [/Failed to parse source map/],
			resolve: {
				fallback: {
					assert: require.resolve('assert/'),
					crypto: require.resolve('crypto-browserify/'),
					http: require.resolve('stream-http/'),
					https: require.resolve('https-browserify/'),
					os: require.resolve('os-browserify/browser'),
					stream: require.resolve('stream-browserify/'),
					url: require.resolve('url/'),
					util: require.resolve('util/'),
				},
				alias: {
					process: 'process/browser',
				},
			},
		},
		plugins: [
			new ProvidePlugin({
				Buffer: ['buffer', 'Buffer'],
			}),
			
			new webpack.ProvidePlugin({
				process: 'process/browser',
 			})
		],
	},
};
