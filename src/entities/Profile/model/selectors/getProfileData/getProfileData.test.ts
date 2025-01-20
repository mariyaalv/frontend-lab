import { StateSchema } from "app/providers/StoreProvider";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { getProfileData } from "./getProfileData";

const data = {
  username: "admin",
  age: 24,
  country: Country.Russia,
  lastname: "abc",
  city: "abc",
  currency: Currency.RUB,
};

describe("getProfileData", () => {
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { data },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
