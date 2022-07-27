import dotenv from 'dotenv';
import ESLintPlugin from 'eslint-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import fs from 'fs';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import {
	Configuration as WebpackConfiguration,
	HotModuleReplacementPlugin,
	DefinePlugin,
} from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config = (env: { ENVIRONMENT: string }): Configuration => {
	const currentPath = path.join(__dirname);
	const basePath = currentPath + '/.env';
	const envPath = basePath + '.' + env.ENVIRONMENT;
	const finalPath = fs.existsSync(envPath) ? envPath : basePath;
	const fileEnv = dotenv.config({ path: finalPath }).parsed ?? {};

	const envKeys: Record<string, string> = Object.keys(fileEnv).reduce(
		(prev, next) => {
			prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
			return prev;
		},
		{} as Record<string, string>,
	);

	return {
		mode: 'development',
		output: {
			publicPath: '/',
		},
		entry: './src/index.tsx',
		module: {
			rules: [
				{
					test: /\.(ts|js)x?$/i,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								'@babel/preset-react',
								'@babel/preset-typescript',
							],
						},
					},
				},
			],
		},
		resolve: {
			extensions: ['.tsx', '.ts', '.js'],
			alias: {
				'@react-webpack-boilerplate': path.resolve(__dirname, 'src/'),
			},
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.join(__dirname, '/public/index.html'),
			}),
			new HotModuleReplacementPlugin(),
			new ForkTsCheckerWebpackPlugin({
				async: false,
			}),
			new ESLintPlugin({
				extensions: ['js', 'jsx', 'ts', 'tsx'],
			}),
			new DefinePlugin(envKeys),
		],
		devtool: 'inline-source-map',
		devServer: {
			static: path.join(__dirname, 'build'),
			historyApiFallback: true,
			port: 3000,
			open: true,
			hot: true,
		},
	};
};

export default config;
