import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,
    // вместо хардкорного варианат './src/index.js' :
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      // конфигурируем лоадеры
      // чтобы обрабатывать файлы, которые выходят за рамки js (EX. png, ts)
      rules: buildLoaders(options),
    },
    // чтобы не указывать расширение при импорте
    resolve: buildResolvers(options),
    // для обновления на сервере без перезапуска вебпака
    // isDev ? => для продакш сборки это не будет запускаться
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
