import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/Profile";

// interface FetchProfileDataProps {
//   username: string,
//   password: string
// }

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  "profile/fetchProfileData",
  async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // получаем данные с сервака о статусе авторизации
      const response = await extra.api.get<Profile>("/profile");

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
