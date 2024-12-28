import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    exclude: /node_modules/,
    test: /\.(js|jsx|tsx|)$/,
    use: {
      test: /\.(js|jsx|tsx|)$/,
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

  const svgLoader = {
    test: /\.svg$/i,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // в продакшене минифицированный будет файл
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes(".module"),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

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
