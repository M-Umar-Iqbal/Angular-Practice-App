import { Component, inject, OnInit, signal } from '@angular/core';
import { UserType } from '../model/users.type';
import { UsersService } from '../services/users';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.scss',
  providers: [ UsersService ]
})
export class Users implements OnInit {
  users = signal<Array<UserType>>([]);
  usersService = inject(UsersService); // Dependency injection
  isLoading = signal(true);

  // Older way to inject services
  // constructor(private usersService: UsersService) {
  //   this.usersService.getUsers().subscribe((users) => {
  //     this.users.set(users);
  //   });
  // }

  ngOnInit(): void {
    console.log('Users component initialized');
    this.usersService.getUsers().subscribe({
      next: (response) => {
        this.users.set(response.data);
      },
      error: (error) => {
        console.error('Error fetching users', error);
        this.isLoading.set(false);
      },
      complete: () => {
        this.isLoading.set(false);
      }
    });
  }

}
