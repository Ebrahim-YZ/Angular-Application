import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsLoginComponent } from './components-login.component';

describe('ComponentsLoginComponent', () => {
  let component: ComponentsLoginComponent;
  let fixture: ComponentFixture<ComponentsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
