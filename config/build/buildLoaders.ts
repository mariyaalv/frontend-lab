import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx|)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["ru", "en"],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  };

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

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
