import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsCommentsSchema";
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: (comment: Comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: "articleDetailsComments",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {
    },
  }),
  reducers: {},
  extraReducers: (builder) => {
      builder
        .addCase(fetchCommentsByArticleId.pending, (state, action) => {
          state.isLoading = true;
          state.error = undefined;
        })
        .addCase(fetchCommentsByArticleId.fulfilled, (
          state,
          { payload }: PayloadAction<Comment[]>,
        ) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, payload);
        })
        .addCase(fetchCommentsByArticleId.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        });
    },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
