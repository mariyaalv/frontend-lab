export type BuildMode = "development" | "production";

export interface BuildPaths {
  entry: string; // путь до энтрипойнт
  build: string; // до папки со сборкой
  html: string; // до файла html
  src: string;
}

// переменные окружения
export interface BuildEnv {
  mode: BuildMode;
  port: number;
  apiURL: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiURL: string;
  project: "storybook" | "frontend" | "jest";
}
