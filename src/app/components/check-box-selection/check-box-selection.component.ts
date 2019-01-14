import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output()
  checked = new EventEmitter();

  onSelect({ selected }, tableDetails) {
    if (tableDetails.selectionType === 'checkbox') {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
      this.checked.emit(selected);
    } else {
      console.log('selected');
    }
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  doneRedo(row: object) {
    event.stopPropagation();
    this.changed.emit(row);
    this.tableDetails['list'] = [...this.tableDetails['list']];
    this.selected = [];
  }
}
