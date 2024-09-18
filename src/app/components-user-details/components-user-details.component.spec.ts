import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsUserDetailsComponent } from './components-user-details.component';

describe('ComponentsUserDetailsComponent', () => {
  let component: ComponentsUserDetailsComponent;
  let fixture: ComponentFixture<ComponentsUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsUserDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
