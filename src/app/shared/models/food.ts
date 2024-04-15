import { User } from "./user";

export class Food {
  id:number;
  food_name: string;
  calories: number;
  createdAt?: string;
  user?: User;

  constructor(food:any) {
    this.id = food.id || 0;
    this.food_name = food.food_name || '';
    this.calories = food.calories || 0;
    this.createdAt = food.createdAt || '';
    this.user = food.user || null;
  }
}
