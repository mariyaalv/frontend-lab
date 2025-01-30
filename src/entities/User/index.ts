import { getUserMounted } from "./model/selectors/getUserMounted/getUserMounted";
import { User, UserSchema } from "./model/types/User";
import { userActions, userReducer } from "./model/slice/userSlice";
import { getUserAuthData } from "./model/selectors/getUserAuthData/getUserAuthData";

export {
  userReducer,
  userActions,
  User,
  UserSchema,
  getUserAuthData,
  getUserMounted,
};
