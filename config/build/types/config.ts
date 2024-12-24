export type BuildMode = "development" | "production";

export interface BuildPath {
	entry: string; //путь до энтрипойнт
	build: string; //до папки со сборкой
	html: string; //до файла html
}

//переменные окружения
export interface BuildEnv {
	mode: BuildMode;
	port: number;
}

export interface BuildOptions {
	mode: BuildMode;
	paths: BuildPath;
	isDev: boolean;
	port: number;
}
