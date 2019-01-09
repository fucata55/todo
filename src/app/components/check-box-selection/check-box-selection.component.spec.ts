import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBoxSelectionComponent } from './check-box-selection.component';

describe('CheckBoxSelectionComponent', () => {
  let component: CheckBoxSelectionComponent;
  let fixture: ComponentFixture<CheckBoxSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckBoxSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckBoxSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
