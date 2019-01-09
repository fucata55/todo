import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-box-selection',
  templateUrl: './check-box-selection.component.html',
  styleUrls: ['./check-box-selection.component.scss']
})
export class CheckBoxSelectionComponent {

  @Input()
  data: object[];

  selected = [];

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }


  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }

}
