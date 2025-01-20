import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileForm } from "./getProfileForm";

const form = {
  username: "admin",
  age: 24,
  country: Country.Russia,
  lastname: "abc",
  city: "abc",
  currency: Currency.RUB,
};

describe("getProfileForm", () => {
  test("should return form data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { form },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(form);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
