import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema";
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById";
import { Article } from "../types/Article";

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleById.fulfilled, (
        state,
        { payload }: PayloadAction<Article>,
      ) => {
        state.isLoading = false;
        state.data = payload;
      })
      .addCase(fetchArticleById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
