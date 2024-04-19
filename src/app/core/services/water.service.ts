import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Water } from '../../shared/models/water';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WaterService {
  constructor(private http: HttpClient) {}

  getWater(): Observable<Water[]> {
    // debugger;
    return this.http.get<Water[]>(`${environment.apiURL}waters/user_waters`);
  }


  newWater(water: Water): Observable<Water[]> {
    return this.http.post<Water[]>(`${environment.apiURL}/waters`, water);
  }

  updateWater(
    water_id: number,
    ounces: FormData,
    user_id: number
  ): Observable<Water[]> {
    return this.http.put<Water[]>(
      `${environment.apiURL}users/${user_id}/waters/${water_id}`,
      {
        ounces
      }
    );
  }

  deleteWorkout(user_id: number, water_id: number): Observable<Water[]> {
    return this.http.delete<Water[]>(
      `${environment.apiURL}users/${user_id}/waters/${water_id}`,
      {}
    );
  }
}
