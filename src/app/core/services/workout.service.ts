import { Injectable } from '@angular/core';
import { Workout } from '../../shared/models/workout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from './authentication.service';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${environment.apiURL}workouts/user_workouts`);
  }

  newWorkout(workout: Workout): Observable<Workout[]> {
    return this.http.post<Workout[]>(`${environment.apiURL}/workouts`, workout);
  }

  updateWorkout(
    workout_id: number,
    workoutName: FormData,
    sets: FormData,
    reps: FormData,
    calories_burned: FormData
  ): Observable<Workout[]> {
    return this.http.put<Workout[]>(
      `${environment.apiURL}workouts/${workout_id}`,
      {
        workoutName,
        sets,
        reps,
        calories_burned,
      }
    );
  }

  deleteWorkout(workout_id: number): Observable<Workout[]> {
    return this.http.delete<Workout[]>(
      `${environment.apiURL}workouts/${workout_id}`,
      {}
    );
  }
}
