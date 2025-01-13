import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Profile.module.scss";

interface ProfileProps {
  className?: string;
}

export const Profile = ({ className }: ProfileProps) => (
  <div className={classNames(cls.Profile, {}, [className])} />
  );
