import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-login',
  templateUrl: './components-login.component.html',
  styleUrl: './components-login.component.css'
})
export class ComponentsLoginComponent {
  imagePath = 'assets/images/pngegg.png';
  rememberPassword = false;
  username = '';
  password = '';
  constructor(private router: Router) { }

  onSubmit() {
    // Handle login logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    console.log('Remember Password:', this.rememberPassword);
    // Assuming successful login, navigate to the main dashboard
    this.router.navigate(['/dashboard']);
  }
  onForgotPassword() {
    // Handle forgot password logic here
    console.log('Forgot Password clicked');
  }
}
