import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

/**
 * This component represents the dashboard, containing a sidebar menu with different navigation items.
 * - The sidebar menu contains links to various sections like Daily Guest, Event Materials, Add User, etc.
 * - The sidebar can be toggled visible or hidden.
 * - Includes functionality for user logout, which clears the authentication token and redirects to the login page.
 */
@Component({
  selector: 'app-components-dashboard',
  templateUrl: './components-dashboard.component.html',
  styleUrl: './components-dashboard.component.css'
})
export class ComponentsDashboardComponent {
  // Sidebar visibility flag
  visible = false;

  // Menu items to be displayed in the sidebar
  items: MenuItem[] = [
    {
      label: 'Daily Guest',
      icon: 'pi pi-users',
      routerLink: '/daily-guest',
      command: () => this.navigateAndCollapse('/daily-guest') // Navigate and collapse the sidebar
    },
    {
      label: 'Event Materials',
      icon: 'pi pi-file',
      routerLink: '/event-materials',
      command: () => this.navigateAndCollapse('/event-materials')
    },
    {
      label: 'Add User',
      icon: 'pi pi-plus',
      routerLink: '/add-user',
      command: () => this.navigateAndCollapse('/add-user')
    },
    {
      label: 'Read',
      icon: 'pi pi-eye',
      routerLink: '/read-user',
      command: () => this.navigateAndCollapse('/read-user')
    },
    {
      label: 'Update',
      icon: 'pi pi-pencil',
      routerLink: '/update-user',
      command: () => this.navigateAndCollapse('/update-user')
    },
    {
      label: 'Delete',
      icon: 'pi pi-trash',
      routerLink: '/delete-user',
      command: () => this.navigateAndCollapse('/delete-user')
    },
    {
      label: 'Logout',
      icon: 'pi pi-poweroff',
      command: () => this.logout() // Trigger logout when clicked
    }
  ];

  constructor(private router: Router) {}

  /**
   * Toggles the visibility of the sidebar.
   */
  toggleSidebar() {
    this.visible = !this.visible;
  }

  /**
   * Logs the user out by clearing authentication-related data.
   * - Removes the 'authToken' from local storage.
   * - Redirects the user to the login page.
   */
  logout() {
    // Perform logout logic here, like clearing tokens
    localStorage.removeItem('authToken'); // Example token removal

    // Redirect to the login page
    this.router.navigate(['/']);
  }

  /**
   * Navigates to the provided route and collapses the sidebar.
   * @param route The route to navigate to.
   */
  navigateAndCollapse(route: string) {
    this.router.navigate([route]);
    this.visible = false; // Collapse the menu after navigating
  }
}
