import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UserResponse } from '../model/users.type';

@Injectable()
export class UsersService {
  httpService = inject(HttpClient); // Dependency injection
  getUsers() {
    const url = 'http://localhost:8080/api/v1/users/fetch-all-users';
    return this.httpService.get<UserResponse>(url);
  }

}
