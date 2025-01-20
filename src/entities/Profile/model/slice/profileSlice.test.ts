import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ProfileSchema, ValidateProfileErrors } from "../types/Profile";
import { profileActions, profileReducer } from "./profileSlice";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
  username: "admin",
  age: 24,
  country: Country.Russia,
  firstname: "abc",
  lastname: "abc",
  city: "abc",
  currency: Currency.RUB,
};

describe("profileSlice", () => {
// reducers
  test("test set readonly", () => {
    const state: DeepPartial<ProfileSchema> = { readOnly: false };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(true),
    )).toEqual({ readOnly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: "" },
    };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit(),
    )).toEqual({
      readOnly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<ProfileSchema> = { form: { username: "123" } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({
        username: "123",
      }),
    )).toEqual({
      form: { username: "123" },
    });
  });

// extraReducers
  test("test update profile service pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, ""),
    )).toEqual({
      isLoading: false,
      readOnly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
