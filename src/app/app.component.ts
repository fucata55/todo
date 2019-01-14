import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  amountChecked = 0;
  isTodo: boolean;
  listLength: number;


  applyTableSummary(tabSummary) {
    this.amountChecked = tabSummary.amountChecked;
    this.listLength = tabSummary.contentAmount;
    this.isTodo = tabSummary.textLabel === 'To-do' ? true : false;
  }

  applyCheck(checkedList) {
    this.amountChecked = checkedList.length;
  }
}
