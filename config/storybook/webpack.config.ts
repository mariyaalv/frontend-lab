/* eslint-disable @typescript-eslint/no-non-null-assertion */
import webpack, { RuleSetRule, DefinePlugin } from "webpack";
import path from "path";
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: "",
        html: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };
    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push(".ts", ".tsx");

    // находим правило, которое обрабатывает svg, и исключаем обработку свг для этого правила
    // в обратном случае просто возращаем правило (если оно никак не связано с свг)
    // eslint-disable-next-line no-param-reassign, @typescript-eslint/ban-ts-comment
    // @ts-ignore
    config!.module!.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config!.module!.rules.push(buildSvgLoader());

    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
    }));

    return config;
};
