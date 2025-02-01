import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/Profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
  >(
  "profile/fetchProfileData",
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // получаем данные с сервака о статусе авторизации
      const response = await extra.api.get<Profile>(`/profile/${profileId}`);

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
