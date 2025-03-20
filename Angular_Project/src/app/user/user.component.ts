import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUser: any = { addresses: [] }; 
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.result; 
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
        this.loadUsers();  
        this.closeModal(); 
      },
      error: (error) => {
        console.error('Error creating user', error);
      }
    });
  }
  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe({
        next: () => {
          console.log('User deleted successfully');
          this.loadUsers();
        },
        error: (error) => {
          console.error('Error deleting user', error);
        }
      });
    }
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
