import { Component } from '@angular/core';
import { TodosService } from '../services/todos';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
  providers: [TodosService]
})
export class Todos {

}
