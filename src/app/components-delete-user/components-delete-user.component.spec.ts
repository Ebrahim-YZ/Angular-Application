import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDeleteUserComponent } from './components-delete-user.component';

describe('ComponentsDeleteUserComponent', () => {
  let component: ComponentsDeleteUserComponent;
  let fixture: ComponentFixture<ComponentsDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsDeleteUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
