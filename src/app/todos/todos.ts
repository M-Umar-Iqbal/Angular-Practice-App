import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos';
import { Todo } from '../model/todos.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
  providers: [TodosService]
})
export class Todos implements OnInit {
 todoService = inject(TodosService);
 todoItems = signal<Array<Todo>>([]);
 inputType: string = "text";
 todoTitle: string = "";

 showWelcomeAlert(): void {

 };

 ngOnInit(): void {
   this.todoItems.set(this.todoService.todoItems)
 }
}

