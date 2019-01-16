import { RowDetailDialogComponent } from './../../row-detail-dialog/row-detail-dialog.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { createRootComponentView } from '@angular/core/src/render3/component';

@Component({
  selector: 'app-check-box-selection',
  templateUrl: './check-box-selection.component.html',
  styleUrls: ['./check-box-selection.component.scss']
})
export class CheckBoxSelectionComponent {

  constructor(public dialog: MatDialog) {}
  @Input()
  tableDetails: object[];

  selected = [];
  editing = {};
  editable = false;

  @Output()
  changed = new EventEmitter();

  @Output()
  checked = new EventEmitter();

  toggleEditable(rowUniqueId) {
    event.stopPropagation();
    this.editable = !this.editable;
  }

  createTask(row) {
    event.stopPropagation();
    console.log(row);
  }

  onSelect({ selected }, tableDetails) {
    event.stopPropagation();
    if (tableDetails.selectionType === 'checkbox') {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
      this.checked.emit(selected);
    }
  }

  openDialog(e, tableDetails) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.data = {
      row: e.row,
      actionName: tableDetails.action.name
    };

    if (e.type === 'click') {
      this.dialog.open(RowDetailDialogComponent, dialogConfig)
        .afterClosed()
        .subscribe(respond => this.doneRedo(respond));
    }
  }

  doneRedo(row: object) {
    event.stopPropagation();
    this.changed.emit(row);
    this.tableDetails['list'] = [...this.tableDetails['list']];
    this.selected = [];
  }
}
