import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { validateProfileData } from "./validateProfileData";
import { ValidateProfileErrors } from "../../types/Profile";

const data = {
  username: "admin",
  age: 24,
  country: Country.Russia,
  firstname: "abc",
  lastname: "abc",
  city: "abc",
  currency: Currency.RUB,
};

describe("validateProfileData", () => {
  test("validate profile data", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({ ...data, age: -1 });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test("incorrect firstname", async () => {
    const result = validateProfileData({ ...data, firstname: "" });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test("incorrect lastname", async () => {
    const result = validateProfileData({ ...data, lastname: "" });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
