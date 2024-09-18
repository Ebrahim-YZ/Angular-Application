import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

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
  styleUrls: ['./components-update-user-info.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ComponentsUpdateUserInfoComponent implements OnInit {
  userData: User[] = [];
  jobTypes = [
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Manager', value: 'manager' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve the stored data from Local Storage
      const storedData = localStorage.getItem('signupFormData');
      if (storedData) {
        this.userData = [JSON.parse(storedData)]; // Ensure userData is typed as User[]
      } else {
        console.warn('No data found in local storage');
      }
    } else {
      console.warn('Not running in a browser environment');
    }
  }

  updateUser(index: number): void {
    if (isPlatformBrowser(this.platformId)) {
      // Update the user data in localStorage
      const updatedData = this.userData[index];
      localStorage.setItem('signupFormData', JSON.stringify(updatedData));
      console.log('User updated:', updatedData);
    } else {
      console.warn('Not running in a browser environment');
    }
  }
}
