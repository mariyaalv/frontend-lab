import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../../types/Article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
  >(
  "aricleDetails/fetchArticleById",
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // получаем данные с сервака о статусе авторизации
      const response = await extra.api.get<Article>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  },
);
