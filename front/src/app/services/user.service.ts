// frontend/src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  // Obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Crear un nuevo usuario
  createUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }
}
