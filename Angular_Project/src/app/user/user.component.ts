import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUser: any = { addresses: [] }; // Ensure newUser is defined and has addresses array

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.result; // Assign response data
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      }
    });
  }

  createUser() {
    this.userService.createUser(this.newUser).subscribe({
      next: (response) => {
        console.log('User created successfully', response);
        this.loadUsers();  // Refresh the list of users
        this.closeModal(); // Close the modal after user creation
      },
      error: (error) => {
        console.error('Error creating user', error);
      }
    });
  }

  openModal() {
    const modal = document.getElementById('createUserModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('createUserModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  addAddress() {
    this.newUser.addresses.push({});
  }

  removeAddress(index: number) {
    this.newUser.addresses.splice(index, 1);
  }
}
