import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-components-delete-user',
  templateUrl: './components-delete-user.component.html',
  styleUrls: ['./components-delete-user.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ComponentsDeleteUserComponent implements OnInit {
  userData: unknown = {};

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Retrieve the stored data from Local Storage if running in the browser
      const storedData = localStorage.getItem('signupFormData');
      if (storedData) {
        this.userData = JSON.parse(storedData);
      } else {
        this.userData = null;
      }
    } else {
      console.warn('Not running in a browser environment');
    }
  }

  deleteUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Remove the item from Local Storage if running in the browser
      localStorage.removeItem('signupFormData');
      this.userData = null;
      alert('User data deleted successfully!');
    } else {
      console.warn('Not running in a browser environment');
    }
  }
}
