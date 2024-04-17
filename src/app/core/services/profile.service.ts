import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../environments/environment.development';
import { Profile } from '../../shared/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${environment.apiURL}users/1/profile`).pipe(catchError((err) => {
      throw err;
    }));
  }
}
