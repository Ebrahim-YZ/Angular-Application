import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsUpdateUserInfoComponent } from './components-update-user-info.component';

describe('ComponentsUpdateUserInfoComponent', () => {
  let component: ComponentsUpdateUserInfoComponent;
  let fixture: ComponentFixture<ComponentsUpdateUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsUpdateUserInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsUpdateUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
