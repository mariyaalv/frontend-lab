import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";

describe("loginSlice", () => {
// reducers
  test("test set uername", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "123",
    };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername("123123"),
    )).toEqual({ username: "123123" });
  });

  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "123",
    };
    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword("123123"),
    )).toEqual({ password: "123123" });
  });
});
