import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string,
  password: string
}
// createAsyncThunk третьим аргументом принимает типы unknown => можно самим гибко настроить
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  "login/loginByUsername",
  async (authData, thunkAPI) => {
    try {
      // получаем данные с сервака о статусе авторизации
      const response = await axios.post<User>("http://localhost:8000/login", authData);
      // на всякий случай
      if (!response.data) {
        throw new Error();
      }
      // с полученными данными нужно что-то делать
      // сохраняем в константу user, имитация авторизации
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      // передаем в метод данные с сервера
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue("error");
    }
  },
);
