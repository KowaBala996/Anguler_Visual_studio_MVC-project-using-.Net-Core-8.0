import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7131/api';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/customer`);
  }
createUser(user: any): Observable<any> {
  const headers =  new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.http.post<any>(`${this.apiUrl}/CreateUserAsync`, JSON.stringify(user), { headers });
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/User/${userId}`);
  }


}
