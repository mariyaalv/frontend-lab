import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Comment } from "entities/Comment";
import { addCommentForArticle } from "./addCommentForArticle";

const comment: Comment = {
  id: "1",
  user: {
    id: "1",
    username: "test",
  },
  text: "test",
};

describe("addCommentForArticle", () => {
  test("success add comment for article", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1", username: "test" } },
      articleDetails: { data: { id: "1" } },
    });
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const text = "test comment";

    const result = await thunk.callThunk(text);

    expect(thunk.api.post).toHaveBeenCalledWith("/comments", {
      articleId: "1",
      userId: "1",
      text,
    });

    expect(result.meta.requestStatus).toBe("fulfilled");
    expect(result.payload).toEqual(comment);
  });

  test("error", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const text = "test comment";
    const result = await thunk.callThunk(text);

    expect(result.meta.requestStatus).toBe("rejected");
  });
});
