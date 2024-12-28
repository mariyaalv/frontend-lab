import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true, // автоматические открывает страницу в браузере
    historyApiFallback: true,
    hot: true, // чтобы не обновлять при изменениях
  };
}
