/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy } from "react";

export const ArticleDetailsPageAsync = lazy(() => new Promise((resolve) => {
// @ts-ignore
// так делать не надо, делаем для проекта - отображение loading
  setTimeout(() => resolve(import("./ArticleDetailsPage")), 1500);
}));
