/**
 * This is the root module of the application, which imports all the necessary
 * Angular modules, third-party modules (PrimeNG), and declares the components used
 * in the application. It also configures the application bootstrap.
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsLoginComponent } from './components-login/components-login.component';

// PrimeNG modules for UI components
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ComponentsDashboardComponent } from './components-dashboard/components-dashboard.component';
import { MenuModule } from 'primeng/menu';
import { ComponentsFooterComponent } from './components-footer/components-footer.component';
import { ComponentsAddUserComponent } from './components-add-user/components-add-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Forms modules for reactive and template-driven forms
import { DropdownModule } from 'primeng/dropdown'; // PrimeNG dropdown module
import { HttpClientModule } from '@angular/common/http'; // Module for making HTTP requests
import { ComponentsUserDetailsComponent } from './components-user-details/components-user-details.component';
import { TableModule } from 'primeng/table'; // PrimeNG table module
import { ComponentsDeleteUserComponent } from './components-delete-user/components-delete-user.component';
import { ComponentsUpdateUserInfoComponent } from './components-update-user-info/components-update-user-info.component';

/**
 * @NgModule decorator defines the metadata for this module.
 * 
 * declarations: Declares all the components that belong to this module.
 * imports: Imports Angular core modules, third-party modules like PrimeNG, and custom modules.
 * providers: Defines the services that will be available in this module (empty in this case).
 * bootstrap: Specifies the root component that Angular should bootstrap when the application starts.
 */
@NgModule({
  declarations: [
    AppComponent, // Root component
    ComponentsLoginComponent, // Login component
    ComponentsDashboardComponent, // Dashboard component
    ComponentsFooterComponent, // Footer component
    ComponentsAddUserComponent, // Add user component
    ComponentsUserDetailsComponent, // Display user details
    ComponentsDeleteUserComponent, // Component for deleting users
    ComponentsUpdateUserInfoComponent, // Component for updating user information
  ],
  imports: [
    BrowserModule, // Required for running the app in a browser
    BrowserAnimationsModule, // Enables animations
    AppRoutingModule, // Sets up app routing
    InputTextModule, // PrimeNG input field module
    ButtonModule, // PrimeNG button module
    FormsModule, // Angular forms module for template-driven forms
    InputGroupModule, // PrimeNG input group module
    CheckboxModule, // PrimeNG checkbox module
    CardModule, // PrimeNG card module for UI layout
    SidebarModule, // PrimeNG sidebar module
    MenuModule, // PrimeNG menu module
    ReactiveFormsModule, // Angular forms module for reactive forms
    DropdownModule, // PrimeNG dropdown for select options
    HttpClientModule, // HTTP module for API requests
    TableModule // PrimeNG table module for displaying data in tables

  ],
  providers: [], // No service providers specified
  bootstrap: [AppComponent] // Root component to bootstrap the application
})

export class AppModule { }
