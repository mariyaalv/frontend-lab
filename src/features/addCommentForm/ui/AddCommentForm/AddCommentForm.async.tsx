/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, lazy } from "react";
import { AddCommentFormProps } from "./AddCommentForm";

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => new Promise((resolve) => {
// @ts-ignore
// так делать не надо, делаем для проекта - отображение loading
    setTimeout(() => resolve(import("./AddCommentForm")), 1500);
  }),
);
