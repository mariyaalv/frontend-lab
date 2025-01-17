import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/Profile";
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
  readOnly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadonly: (state, { payload }: PayloadAction<boolean>) => {
      state.readOnly = payload;
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.form = state.data;
    },
    updateProfile: (state, { payload }: PayloadAction<Profile>) => {
      state.form = { ...state.data, ...payload };
    },
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
          state.form = payload;
        })
        .addCase(fetchProfileData.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        })
        .addCase(updateProfileData.pending, (state, action) => {
          state.isLoading = true;
          state.error = undefined;
        })
        .addCase(updateProfileData.fulfilled, (
          state,
          { payload }: PayloadAction<Profile>,
        ) => {
          state.isLoading = false;
          state.data = payload;
          state.form = payload;
          state.readOnly = true;
        })
        .addCase(updateProfileData.rejected, (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
