import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabList: string[];

  constructor() { }

  ngOnInit() {
    this.tabList = ['To-do', 'Done'];
  }

  switchTab(tab) {
    console.log(tab);
  }
}
