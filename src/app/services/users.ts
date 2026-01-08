import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserResponse } from '../model/users.type';
import { environment } from '../../environments/environment';
import { UserClass } from '../model/class/user.class';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  httpService = inject(HttpClient); // Dependency injection
  getUsers(): Observable<UserResponse> {
    const url = `${environment.API_BASE_URL}/api/v1/users/fetch-all-users`;
    return this.httpService.get<UserResponse>(url);
  }

  addUser(user: UserClass): Observable<UserResponse> {
    const url = `${environment.API_BASE_URL}/api/v1/users/create-user`;
    return this.httpService.post<UserResponse>(url, user);
  }

  updateUser(user: UserClass): Observable<UserResponse> {
    const url = `${environment.API_BASE_URL}/api/v1/users/update-user`;
    return this.httpService.put<UserResponse>(url, user);
  }

  deleteUser(id: number): Observable<UserResponse> {
    const url = `${environment.API_BASE_URL}/api/v1/users/delete-user/${id}`;
    return this.httpService.delete<UserResponse>(url);
  }

}
