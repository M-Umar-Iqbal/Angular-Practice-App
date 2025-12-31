import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../model/users.type';

@Injectable()
export class UsersService {
  httpService = inject(HttpClient); // Dependency injection
  getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.httpService.get<Array<User>>(url);
  }

}
