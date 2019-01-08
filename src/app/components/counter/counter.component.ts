import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor() { }

  @Input()
  amountChecked: number;

  @Input()
  listLength: number;

  @Input()
  isTodo: boolean;

  ngOnInit() {
  }

  private displaySummary() {
    // Display appropriate number and category

    if ( this.amountChecked === 0 ) {
    // Choose to display the length of to-do or done list if no item is checked
      if (this.isTodo === true) {
        return `${this.listLength} things to-do`;
      } else {
        return `${this.listLength} things done`;
      }
    } else {
      // Display the amount of things that are checked
      return `${this.amountChecked} things checked`;
    }
  }
}
