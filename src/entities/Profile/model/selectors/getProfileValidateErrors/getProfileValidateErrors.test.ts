import { StateSchema } from "app/providers/StoreProvider";
import { getProfileValidateErrors } from "./getProfileValidateErrors";
import { ValidateProfileErrors } from "../../types/Profile";

describe("getProfileValidateErrors", () => {
  test("should return validateErrors", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.INCORRECT_COUNTRY],
       },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.INCORRECT_COUNTRY]);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
