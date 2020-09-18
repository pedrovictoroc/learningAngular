import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertiesComponent } from './input-properties.component';

describe('InputPropertiesComponent', () => {
  let component: InputPropertiesComponent;
  let fixture: ComponentFixture<InputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
