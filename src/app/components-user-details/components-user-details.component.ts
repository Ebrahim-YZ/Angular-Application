import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { UserData } from '../interface/userData';

@Component({
  selector: 'app-components-user-details',
  templateUrl: './components-user-details.component.html',
  styleUrls: ['./components-user-details.component.css']
})
export class ComponentsUserDetailsComponent implements OnInit {
  userData: UserData | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Running in browser environment');
      // Retrieve the stored data from localStorage
      try {
        const storedData = localStorage.getItem('signupFormData');
        if (storedData) {
          this.userData = JSON.parse(storedData);
          console.log('Data retrieved from localStorage:', this.userData);
        } else {
          console.warn('No data found in localStorage');
        }
      } catch (error) {
        console.error('Error retrieving data from localStorage:', error);
      }
    } else {
      console.warn('Not running in a browser environment');
    }
  }
}
