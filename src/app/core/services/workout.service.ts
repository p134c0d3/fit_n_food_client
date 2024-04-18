import { Injectable } from '@angular/core';
import { Workout } from '../../shared/models/workout';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment.development';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  constructor(private http: HttpClient) {}

  getWorkouts(user_id: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(
      `${environment.apiURL}users/${user_id}/workouts`
    );
  }

  newWorkout(
    workoutName: FormData,
    sets: FormData,
    reps: FormData,
    calories_burned: FormData,
    user_id: number
  ): Observable<Workout[]> {
    return this.http.post<Workout[]>(
      `${environment.apiURL}users/${user_id}/workouts`,
      {
        workoutName,
        sets,
        reps,
        calories_burned,
      }
    );
  }

  updateWorkout(
    workout_id: number,
    workoutName: FormData,
    sets: FormData,
    reps: FormData,
    calories_burned: FormData,
    user_id: number
  ): Observable<Workout[]> {
    return this.http.put<Workout[]>(
      `${environment.apiURL}users/${user_id}/workouts/${workout_id}`,
      {
        workoutName,
        sets,
        reps,
        calories_burned,
      }
    );
  }

  deleteWorkout(user_id: number, workout_id: number): Observable<Workout[]> {
    return this.http.delete<Workout[]>(
      `${environment.apiURL}users/${user_id}/workouts/${workout_id}`,
      {}
    );
  }
}
