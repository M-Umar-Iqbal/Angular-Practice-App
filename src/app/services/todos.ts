import { Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoItems: Array<Todo> = [
    {
      title: 'groceries',
      completed: false,
      userId: 1,
      id: 1
    },
    {
      title: 'laundry',
      completed: true,
      userId: 1,
      id: 2
    }
  ];
  constructor() {}
}
