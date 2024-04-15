import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Water } from '../../shared/models/water';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WaterService {
  constructor(private http: HttpClient) {}

  getWater(): Observable<Water> {
    return this.http.get<Water>(`${environment.apiURL}users/2/waters`);
  }
}
