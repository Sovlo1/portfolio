import { Tech } from './tech.models';

export class Work {
  name!: string;
  description!: string;
  image!: string;
  stack!: Array<Tech>;
  link?: string;
  github?: Array<string>;
}
