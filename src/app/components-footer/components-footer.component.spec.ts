import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsFooterComponent } from './components-footer.component';

describe('ComponentsFooterComponent', () => {
  let component: ComponentsFooterComponent;
  let fixture: ComponentFixture<ComponentsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentsFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
