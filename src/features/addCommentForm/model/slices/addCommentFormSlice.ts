import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/AddCommentForm";

const initialState: AddCommentFormSchema = {
  text: "",
  error: "",
};

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, { payload }: PayloadAction<string>) => {
      state.text = payload;
    },
  },
  extraReducers: (builder) => {
    // builder
      // .addCase(loginByUsername.pending, (state, action) => {
      //   state.isLoading = true;
      //   state.error = undefined;
      // })
      // .addCase(loginByUsername.fulfilled, (state, action) => {
      //   state.isLoading = false;
      // })
      // .addCase(loginByUsername.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload;
      // });
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
