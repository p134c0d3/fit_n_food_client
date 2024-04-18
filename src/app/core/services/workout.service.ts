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
  constructor(private http: HttpClient, ) {}

  getWorkouts(user_id: number): Observable<Workout[]> {
    return this.http.get<Workout[]>(`${environment.apiURL}users/${user_id}/workouts`);
  }
}
