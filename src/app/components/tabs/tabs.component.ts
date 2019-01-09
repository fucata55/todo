import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabList: object[];
  toDoList: object[];
  doneList: object[];

  constructor() { }

  ngOnInit() {
    this.tabList = [
      {
        name: 'To-do',
        list: [
          { task: 'Austin', description: 'todo description description description description description' },
          { task: 'Dany', description: 'todo description description description description description' },
          { task: 'Molly', description: ' todo description description description description description' },
          { task: 'Molly2', description: ' todo description description description description description' },
          { task: 'Molly3', description: ' todo description description description description description' },
          { task: 'Molly4', description: ' todo description description description description description' },
        ]
      },
      {
        name: 'Done',
        list: [
          { task: 'Austin', description: 'Done description description description description description' },
          { task: 'Dany', description: 'Done description description description description description' },
          { task: 'Molly', description: ' Done description description description description description' },
          { task: 'Molly5', description: ' Done description description description description description' },
          { task: 'Molly6', description: ' Done description description description description description' },
          { task: 'Molly7', description: ' Done description description description description description' },
          { task: 'Molly8', description: ' Done description description description description description' },
          { task: 'Molly9', description: ' Done description description description description description' },
          { task: 'Molly10', description: ' Done description description description description description' },
          { task: 'Molly11', description: ' Done description description description description description' },
        ]
      }
    ];
  }

  switchTab(tab) {
    console.log(tab);
  }
}
