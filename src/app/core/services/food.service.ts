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

  getFood(): Observable<Food[]> {
    return this.http.get<Food[]>(`${environment.apiURL}foods/user_foods`);
  }

  newFood(food: Food): Observable<Food[]> {
    return this.http.post<Food[]>(`${environment.apiURL}/foods`, food);
  }

  updateFood(
    food_id: number,
    foodName: FormData,
    calories: FormData
  ): Observable<Food[]> {
    return this.http.put<Food[]>(
      `${environment.apiURL}foods/${food_id}`,
      {
        foodName,
        calories,
      }
    );
  }

  
}
