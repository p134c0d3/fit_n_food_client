import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.development';
// import { environment } from '../../../environments/environment';
import { Food } from '../../shared/models/food';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFood(user_id: number): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.apiURL}users/${user_id}/foods`);
  }

  newFood(
    foodName: FormData,
    calories: FormData,
    user_id: number
  ): Observable<Food[]> {
    return this.http.post<Food[]>(
      `${environment.apiURL}users/${user_id}/foods`,
      {
        foodName,
        calories
      }
    );
  }

  updateFood(
    food_id: number,
    foodName: FormData,
    calories: FormData,
    user_id: number
  ): Observable<Food[]> {
    return this.http.put<Food[]>(
      `${environment.apiURL}users/${user_id}/foods/${food_id}`,
      {
        foodName,
        calories
      }
    );
  }

  deleteWorkout(user_id: number, food_id: number): Observable<Food[]> {
    return this.http.delete<Food[]>(
      `${environment.apiURL}users/${user_id}/foods/${food_id}`,
      {}
    );
  }
}
