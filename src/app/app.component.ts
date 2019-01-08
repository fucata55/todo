import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo';
  // anySelected means any
  amountChecked = 7;
  isTodo = true;
  listLength = 5;
}
