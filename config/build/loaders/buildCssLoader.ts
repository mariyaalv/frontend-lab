import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
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
}
