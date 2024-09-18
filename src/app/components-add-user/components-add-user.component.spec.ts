import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsAddUserComponent } from './components-add-user.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComponentsAddUserComponent', () => {
  let component: ComponentsAddUserComponent;
  let fixture: ComponentFixture<ComponentsAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsAddUserComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const fullNameControl = component.signupForm.get('fullName');
    const emailControl = component.signupForm.get('email');

    expect(fullNameControl?.value).toBe('');
    expect(emailControl?.value).toBe('');
  });

  it('should validate required fields', () => {
    const fullNameControl = component.signupForm.get('fullName');
    const emailControl = component.signupForm.get('email');

    fullNameControl?.setValue('');
    emailControl?.setValue('');

    expect(fullNameControl?.valid).toBeFalsy();
    expect(emailControl?.valid).toBeFalsy();

    fullNameControl?.setValue('John Doe');
    emailControl?.setValue('john.doe@example.com');

    expect(fullNameControl?.valid).toBeTruthy();
    expect(emailControl?.valid).toBeTruthy();
  });
  

  it('should call onSubmit when the form is submitted', () => {
    spyOn(component, 'onSubmit');

    component.signupForm.setValue({
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '1234567890',
      jobType: 'developer',
      password: 'password123',
      confirmPassword: 'password123'
    });

    fixture.detectChanges(); // Trigger change detection
    const submitButton = fixture.debugElement.query(By.css('p-button'));
    submitButton.nativeElement.click();

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
