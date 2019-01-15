import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-row-detail-dialog',
  templateUrl: './row-detail-dialog.component.html',
  styleUrls: ['./row-detail-dialog.component.scss']
})
export class RowDetailDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
