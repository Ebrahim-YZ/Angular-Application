import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-components-add-user',
  templateUrl: './components-add-user.component.html',
  styleUrls: ['./components-add-user.component.css']
})
export class ComponentsAddUserComponent implements OnInit {

  signupForm!: FormGroup;
  jobTypes = [
    { label: 'Developer', value: 'developer' },
    { label: 'Designer', value: 'designer' },
    { label: 'Manager', value: 'manager' }
  ];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      jobType: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });

  }


  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  /**
 * Handles the form submission event.
 * - Logs the form submission details.
 * - Validates the form data.
 * - If valid, saves the form data to the browser's localStorage.
 * - If localStorage is not available, logs a warning.
 * - If the form is invalid, logs an error message.
 */
  onSubmit() {
    // Log the form submission and its current values
    console.log('Form submitted', this.signupForm.value);

    // Check if the form is valid
    if (this.signupForm.valid) {
      // Ensure window object and localStorage are available (for server-side rendering cases)
      if (typeof window !== 'undefined' && window.localStorage) {
        // Save the form data to localStorage in JSON format
        localStorage.setItem('signupFormData', JSON.stringify(this.signupForm.value));
      } else {
        // Log a warning if localStorage is not available
        console.warn('localStorage is not available');
      }
    } else {
      // Log a message if the form is invalid
      console.log('Form is invalid');
    }
  }

}
