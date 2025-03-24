import { restaurants as northIndian } from './northIndian';
import { restaurants as chinese } from './chinese';
import { restaurants as southIndian } from './southIndian';
import { restaurants as italian } from './italian';
import { restaurants as streetFood } from './streetFood';
import { restaurants as desserts } from './desserts';

export const restaurants = [
  ...northIndian,
  ...chinese,
  ...southIndian,
  ...italian,
  ...streetFood,
  ...desserts
];

export * from './menuItems';