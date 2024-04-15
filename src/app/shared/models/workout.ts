import { User } from "./user";

export class Workout {
  id:number;
  workout_name: string;
  sets: number;
  reps: number;
  calories_burned: number;
  createdAt?:string;
  user?: User

  constructor(workout:any) {
    this.id = workout.id || 0;
    this.workout_name = workout.workout_name || '';
    this.sets = workout.sets || 0;
    this.reps = workout.reps || 0;
    this.calories_burned = workout.calories_burned || 0;
    this.createdAt = workout.createdAt || '';
    this.user = workout.user || null;

  }
}
