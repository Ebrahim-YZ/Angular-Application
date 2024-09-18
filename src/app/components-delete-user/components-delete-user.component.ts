import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-delete-user',
  templateUrl: './components-delete-user.component.html',
  styleUrl: './components-delete-user.component.css'
})
export class ComponentsDeleteUserComponent implements OnInit {
  userData: unknown = {};

  ngOnInit(): void {
    const storedData = localStorage.getItem('signupFormData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    } else {
      this.userData = null;
    }
  }
  deleteUser() {
    localStorage.removeItem('signupFormData');
    this.userData = null;
    alert('User data deleted successfully!');
  }
}
