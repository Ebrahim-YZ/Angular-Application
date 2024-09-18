import { Component, OnInit } from '@angular/core';

interface User {
  fullName: string;
  email: string;
  phoneNumber: string;
  jobType: string;
  password: string;
}
@Component({
  selector: 'app-components-update-user-info',
  templateUrl: './components-update-user-info.component.html',
  styleUrl: './components-update-user-info.component.css'
})
export class ComponentsUpdateUserInfoComponent implements OnInit {
  userData: User[] = [];
  jobTypes = [
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Manager', value: 'manager' }
  ];

  ngOnInit() {
    const storedData = localStorage.getItem('signupFormData');
    if (storedData) {
      this.userData = [JSON.parse(storedData)]; // Ensure userData is typed as User[]
    }
  }

  updateUser(index: number) {
    // Update the user data in localStorage
    const updatedData = this.userData[index];
    localStorage.setItem('signupFormData', JSON.stringify(updatedData));
    console.log('User updated:', updatedData);
  }
}
