import { counterReducer, counterActions } from "./counterSlice";
import { CounterSchema } from "../types/CounterSchema";

describe("counterSlice", () => {
  test("decrement", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.decrement()),
    ).toEqual({ value: 9 });
  });

  test("increment", () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.increment()),
    ).toEqual({ value: 11 });
  });

  // т.к. initialState = 0
  test("should work with empty state", () => {
    expect(
      counterReducer(undefined, counterActions.increment()),
    ).toEqual({ value: 1 });
  });
});
