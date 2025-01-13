/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from "react";

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
// @ts-ignore
// так делать не надо, делаем для проекта - отображение loading
  setTimeout(() => resolve(import("./ProfilePage")), 1500);
}));
