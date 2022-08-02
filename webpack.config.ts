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

type Environment = { ENVIRONMENT: string };

const config = (env: Environment): Configuration => {
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
					use: { loader: 'babel-loader' },
				},
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader'],
				},
				{
					test: /\.(png|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
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
				favicon: path.join(__dirname, '/public/favicon.ico'),
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
