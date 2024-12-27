import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPath } from './config/build/types/config';

// check https://webpack.js.org/guides/environment-variables/
// env - это объект с параметрами окружения, который передается при запуске Webpack
// например мы можем теперь передавать в скрипты такие команды
// "start": "webpack serve --env port=3000",

export default (env: BuildEnv) => {
	const paths: BuildPath = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	};

	const mode = env.mode || 'development';
	const isDev = mode === 'development';

	const PORT = env.port || 3000;

	const config: webpack.Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
	});
	return config;
};
