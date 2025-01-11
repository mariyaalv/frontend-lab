/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, lazy } from "react";
import { LoginFormProps } from "./LoginForm";

// T extends ComponentType<any>
export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
// @ts-ignore
// так делать не надо, делаем для проекта - отображение loading
    setTimeout(() => resolve(import("./LoginForm")), 1500);
  }),
);
