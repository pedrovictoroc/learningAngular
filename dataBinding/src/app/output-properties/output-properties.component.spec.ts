import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropertiesComponent } from './output-properties.component';

describe('OutputPropertiesComponent', () => {
  let component: OutputPropertiesComponent;
  let fixture: ComponentFixture<OutputPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
