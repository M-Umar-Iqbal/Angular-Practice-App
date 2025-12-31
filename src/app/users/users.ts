import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../model/users.type';
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
  users = signal<Array<User>>([]);
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
    this.usersService.getUsers().subscribe((users) => {
      this.users.set(users);
    }, error => {
      console.error('Error fetching users', error);
    }, () => {
      this.isLoading.set(false);
    });
  }

}
