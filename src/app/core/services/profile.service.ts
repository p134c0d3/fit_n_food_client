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

  getProfile(user_id:number): Observable<Profile> {
    return this.http.get<Profile>(`${environment.apiURL}users/${user_id}/profile`).pipe(catchError((err) => {
      throw err;
    }));
  }

  updateProfile(user_id: number, bio: FormData, goals: FormData): Observable<Profile> {
    return this.http.put<Profile>(`${environment.apiURL}users/${user_id}/profile`, {bio, goals}).pipe(catchError((err) => {
      throw err;
    }));
  }
}
