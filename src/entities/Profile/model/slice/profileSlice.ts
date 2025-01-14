import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/Profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
      builder
        .addCase(fetchProfileData.pending, (state, action) => {
          state.isLoading = true;
          state.error = undefined;
        })
        .addCase(fetchProfileData.fulfilled, (
          state,
          { payload }: PayloadAction<Profile>,
        ) => {
          state.isLoading = false;
          state.data = payload;
        })
        .addCase(fetchProfileData.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
