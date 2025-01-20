import { Profile, ValidateProfileErrors } from "../../types/Profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [ValidateProfileErrors.NO_DATA];

  const {
    firstname,
    lastname,
    age,
    country,
  } = profile;

  const errors: ValidateProfileErrors[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age) || age <= 0 || age > 120) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  return errors;
};
