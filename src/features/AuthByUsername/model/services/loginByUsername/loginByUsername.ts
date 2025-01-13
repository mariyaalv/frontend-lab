import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string,
  password: string
}
// createAsyncThunk третьим аргументом принимает типы unknown => можно самим гибко настроить
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  "login/loginByUsername",
  async (authData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      // получаем данные с сервака о статусе авторизации
      const response = await extra.api.post<User>("/login", authData);
      // на всякий случай
      if (!response.data) {
        throw new Error();
      }
      // с полученными данными нужно что-то делать
      // сохраняем в константу user, имитация авторизации
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      // передаем в метод данные с сервера
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("error");
    }
  },
);
