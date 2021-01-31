export interface Action {
  url: string,
  text: string,
}

export interface Project {
  title: string,
  subheading: string,
  description: string,
  techs: string,
  actions?: Action[],
}

export interface Site {
  link: string,
  name: string,
  description: string,
}
