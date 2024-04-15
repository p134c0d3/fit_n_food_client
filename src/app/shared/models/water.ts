import { User } from './user';

export class Water {
  ounces: number;
  id?: number;
  createdAt?: string;
  user?: User;

  constructor(water: any) {
    this.ounces = water.ounces || 0;
    this.id = water.id || 0;
    this.createdAt = water.createdAt || '';
    this.user = water.user || null;
  }
}
