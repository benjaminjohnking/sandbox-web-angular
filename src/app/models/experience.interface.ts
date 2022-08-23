export interface IExperience {
  company: string;
  roles: IRole[];
}

export interface IRole {
  title: string;
  startDate: string;
  endDate?: string;
}