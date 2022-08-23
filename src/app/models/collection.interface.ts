import { IEducation } from "./education.interface";
import { IExperience } from "./experience.interface";
import { IProfile } from "./profile.interface";

export interface ICollection {
  profile: IProfile;
  experience: IExperience[];
  education: IEducation[];
}