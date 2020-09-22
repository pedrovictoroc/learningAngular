import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAPIComponent } from './list-api.component';

describe('ListAPIComponent', () => {
  let component: ListAPIComponent;
  let fixture: ComponentFixture<ListAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
