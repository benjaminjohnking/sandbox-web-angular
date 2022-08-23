export interface IProfile {
  image: string;
  statement: string;
  links: ILink[];
}

export interface ILink {
  title: string;
  url: string;
}