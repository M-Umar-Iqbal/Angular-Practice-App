import { Component, inject, OnInit, signal } from '@angular/core';
import { UserClass } from '../model/class/user.class';
import { UserType } from '../model/users.type';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../services/users';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, FormsModule],
  providers: [UsersService],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements OnInit {
  userObj: UserClass = new UserClass();

  // User list from the API
  usersList = signal<UserType[]>([]);

  // Users service, for fetching users from the API
  usersService = inject(UsersService);
  
  // Available options for skills and hobbies
  // TODO: Fetch these from the API
  availableSkills = ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue', 'Node.js', 'Python', 'Java'];
  availableHobbies = ['Reading', 'Sports', 'Music', 'Travel', 'Photography', 'Cooking', 'Gaming', 'Dancing'];

  // Handle checkbox changes for skills
  onSkillChange(skill: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      if (!this.userObj.skills.includes(skill)) {
        this.userObj.skills.push(skill);
      }
    } else {
      this.userObj.skills = this.userObj.skills.filter(s => s !== skill);
    }
  }

  // Handle checkbox changes for hobbies
  onHobbyChange(hobby: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      if (!this.userObj.hobbies.includes(hobby)) {
        this.userObj.hobbies.push(hobby);
      }
    } else {
      this.userObj.hobbies = this.userObj.hobbies.filter(h => h !== hobby);
    }
  }

  // Check if a skill is selected
  isSkillSelected(skill: string): boolean {
    return this.userObj.skills.includes(skill);
  }

  // Check if a hobby is selected
  isHobbySelected(hobby: string): boolean {
    return this.userObj.hobbies.includes(hobby);
  }

  submitForm() {
    this.usersService.addUser(this.userObj).subscribe({
      next: (response) => {
        if (response && response.success) {
          this.usersList.set(response.data);
          this.userObj = new UserClass();
        }
      },
      error: (error) => {
        console.log("Error adding user: ", error);
      }
    })
  }

  editUser(id: number) {
    console.log("Editing user: ", id);
  }

  deleteUser(id: number) {

  }

  resetForm() {
    this.userObj = new UserClass();
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        if (response && response.success && response.data) {
          this.usersList.set(response.data);
        }
      },
      error: (error) => {
        console.log("Error fetching users: ", error);
      }
    });
  }
}
