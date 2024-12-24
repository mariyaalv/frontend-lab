//глобальная деклорация типов
//чтобы явно определить тип, который должен импортироваться
declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}