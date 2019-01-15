import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowDetailDialogComponent } from './row-detail-dialog.component';

describe('RowDetailDialogComponent', () => {
  let component: RowDetailDialogComponent;
  let fixture: ComponentFixture<RowDetailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowDetailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
