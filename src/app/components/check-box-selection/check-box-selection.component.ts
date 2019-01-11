import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check-box-selection',
  templateUrl: './check-box-selection.component.html',
  styleUrls: ['./check-box-selection.component.scss']
})
export class CheckBoxSelectionComponent {

  @Input()
  tableDetails: object[];

  selected = [];

  @Output()
  changed = new EventEmitter();

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  doneRedo(row: object) {
    this.changed.emit(row);
    this.tableDetails['list'] = [...this.tableDetails['list']];
    this.selected = [];
  }
}
