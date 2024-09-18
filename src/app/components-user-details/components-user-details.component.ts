import { Component, OnInit } from '@angular/core';
import { UserData } from '../interface/userData';

@Component({
  selector: 'app-components-user-details',
  templateUrl: './components-user-details.component.html',
  styleUrl: './components-user-details.component.css'
})
export class ComponentsUserDetailsComponent implements OnInit {
  userData: UserData | null = null;

  constructor() { }
  ngOnInit(): void {
    // Retrieve the stored data from Local Storage
    const storedData = localStorage.getItem('signupFormData');
    if (storedData) {
      this.userData = JSON.parse(storedData);
    } else {
      console.warn('No data found in local storage');
    }
  }

}
