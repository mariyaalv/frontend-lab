import { AddCommentFormSchema } from "../types/AddCommentForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";

describe("addCommentFormSlice", () => {
// reducers
  test("test set text", () => {
    const state: DeepPartial<AddCommentFormSchema> = {
      text: "123",
    };
    expect(addCommentFormReducer(
      state as AddCommentFormSchema,
      addCommentFormActions.setText("123123"),
    )).toEqual({ text: "123123" });
  });
});
