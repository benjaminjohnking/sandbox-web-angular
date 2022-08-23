import { Injectable } from "@angular/core";
import { ICollection } from "../models/collection.interface";
import { IEducation } from "../models/education.interface";
import { IExperience } from "../models/experience.interface";
import { IProfile } from "../models/profile.interface";
import * as data from '../../assets/sandbox_data.json';

@Injectable()
export class AppDataService {
  collection: ICollection;

  constructor() {
    this.collection = data as ICollection;
  }

  public getProfile(): IProfile {
    return this.collection.profile;
  }

  public getExperience(): IExperience[] {
    return this.collection.experience;
  }

  public getEducation(): IEducation[] {
    return this.collection.education;
  }
}