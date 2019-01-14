import { TabsComponent } from './components/tabs/tabs.component';
import { Component, ViewChild } from '@angular/core';

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

  @ViewChild(TabsComponent)
  tabsComponent: TabsComponent;

  applyTableSummary(tabSummary) {
    this.amountChecked = tabSummary.amountChecked;
    this.listLength = tabSummary.contentAmount;
    this.isTodo = tabSummary.textLabel === 'To-do' ? true : false;
  }

  applyCheck(checkedList) {
    this.amountChecked = checkedList.length;
  }

  applyActionOnCheckedItems(action?) {

    const selectedList = this.tabsComponent.checkBoxSelectionComponent.selected;
    const todoList = this.tabsComponent.tabList[0]['list'];
    const doneList = this.tabsComponent.tabList[1]['list'];

    for (const item of selectedList) {
      todoList.splice(todoList.indexOf(item), 1);
    }

    if (action === 'done') {
      for (const item of selectedList) {
        doneList.push(item);
      }
    }

    // update table summary
    this.amountChecked = 0;
    this.listLength = this.tabsComponent.tabList[0]['list'].length;

    // reset selected list
    this.tabsComponent.checkBoxSelectionComponent.selected = [];

    /* Refresh todo list after removing content.
    need to use "this.tabsComponent.tabList[0]['list']" */
    this.tabsComponent.tabList[0]['list'] = [...todoList];
  }
}
