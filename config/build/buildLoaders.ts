import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { buildBabelLoader } from "./loaders/buildBabelLoader";
import { buildFileLoader } from "./loaders/buildFileLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const babelLoader = buildBabelLoader(options);

  const svgLoader = buildSvgLoader();

  const fileLoader = buildFileLoader();

  const cssLoader = buildCssLoader(isDev);

  // если не используем тайскрипт, то реакту jsx нужен еще babel-loader
  // вынесли лоадер в переменную
  const typeScriptLoader = {
    test: /\.tsx?$/, // находим через регулярки файлы, которые надо пропустить через лоадер
    use: "ts-loader",
    exclude: /node_modules/,
  };

  // порядок лоадеров имеет значение
  return [fileLoader, svgLoader, babelLoader, typeScriptLoader, cssLoader];
}
