import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileErrors } from "../../types/Profile";

const form = {
  username: "admin",
  age: 24,
  country: Country.Russia,
  firstname: "abc",
  lastname: "abc",
  city: "abc",
  currency: Currency.RUB,
};

describe("updateProfileData", () => {
  test("success update profile data", async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form } },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ data: form }));
    const result = await thunk.callThunk();
    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(form);
  });

  test("server error", async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form } },
    );
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(
      updateProfileData,
      { profile: { form: { ...form, lastname: "" } } },
    );
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe("rejected");
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
