/**
 * This module defines the application routes for different components.
 * It imports the necessary Angular modules and sets up paths to navigate
 * between various components in the application.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importing components for routing
import { ComponentsLoginComponent } from './components-login/components-login.component';
import { ComponentsDashboardComponent } from './components-dashboard/components-dashboard.component';
import { ComponentsAddUserComponent } from './components-add-user/components-add-user.component';
import { ComponentsUserDetailsComponent } from './components-user-details/components-user-details.component';
import { ComponentsDeleteUserComponent } from './components-delete-user/components-delete-user.component';
import { ComponentsUpdateUserInfoComponent } from './components-update-user-info/components-update-user-info.component';

/**
 * Defines routes in the application, mapping each path to the respective component.
 * For example, navigating to 'login' will render the ComponentsLoginComponent.
 */
const routes: Routes = [
  { path: 'login', component: ComponentsLoginComponent }, // Route for login page
  { path: 'dashboard', component: ComponentsDashboardComponent }, // Route for dashboard page
  { path: 'add-user', component: ComponentsAddUserComponent }, // Route for adding a new user
  { path: 'read-user', component: ComponentsUserDetailsComponent }, // Route to display user details
  { path: 'delete-user', component: ComponentsDeleteUserComponent }, // Route to delete user data
  { path: 'update-user', component: ComponentsUpdateUserInfoComponent }, // Route to delete user data
  { path: '', redirectTo: '/login', pathMatch: 'full' } // Default route redirects to login
];

/**
 * The main routing module of the application.
 * Registers the defined routes and imports the RouterModule.
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
