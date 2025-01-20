import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileErrors } from "../../types/Profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
  >(
  "profile/updateProfileData",
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    // в компонентах useSelector
    // внутри AsyncThunk используем getState
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      // получаем данные с сервака о статусе авторизации
      const response = await extra.api.put<Profile>("/profile", formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
    }
  },
);
