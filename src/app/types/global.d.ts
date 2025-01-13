/* eslint-disable no-undef */
// глобальная деклорация типов
// чтобы явно определить тип, который должен импортироваться
declare module "*.module.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

// познакомили с переменной TS
declare const __IS_DEV__: boolean;
declare const __API__: string;
