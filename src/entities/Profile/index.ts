import { fetchProfileData } from "./model/services/fetchProfileData/fetchProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { Profile, ProfileSchema } from "./model/types/Profile";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  Profile,
  ProfileSchema,
  profileReducer,
  profileActions,
  fetchProfileData,
  ProfileCard,
};
