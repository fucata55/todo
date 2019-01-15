import { CheckBoxSelectionComponent } from './../check-box-selection/check-box-selection.component';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabList: object[];

  @Output()
  checked = new EventEmitter();

  // emmit cheked
  @Output()
  tableSummary = new EventEmitter();

  @ViewChild(CheckBoxSelectionComponent)
  checkBoxSelectionComponent: CheckBoxSelectionComponent;

  ngOnInit() {
    this.tabList = [
      {
        name: 'To-do',
        selectionType: 'checkbox',
        hasCheckBox: true,
        action: {
          name: 'Done'
        },
        list: [
          { uniqueId: '1', task: 'Austin', description: 'todo description description' },
          { uniqueId: '2', task: 'Dany', description: 'todo description description description' },
          { uniqueId: '3', task: 'Molly', description: ' todo description description description' },
          { uniqueId: '4', task: 'Molly2', description: ' todo description description description' },
          { uniqueId: '5', task: 'Molly3', description: ' todo description description description' },
          { uniqueId: '6', task: 'Molly4', description: ' todo description description description' },
        ]
      },
      {
        name: 'Done',
        selectionType: 'single',
        hasCheckBox: false,
        action: {
          name: 'Redo'
        },
        list: [
          { uniqueId: '7', task: 'Austin', description: 'Done description description description description description' },
          { uniqueId: '8', task: 'Dany', description: 'Done description description description description description' },
          { uniqueId: '9', task: 'Molly', description: ' Done description description description description description' },
          { uniqueId: '10', task: 'Molly5', description: ' Done description description description description description' },
          { uniqueId: '11', task: 'Molly6', description: ' Done description description description description description' },
          { uniqueId: '12', task: 'Molly7', description: ' Done description description description description description' },
          { uniqueId: '13', task: 'Molly8', description: ' Done description description description description description' },
          { uniqueId: '14', task: 'Molly9', description: ' Done description description description description description' },
          { uniqueId: '15', task: 'Molly10', description: ' Done description description description description description' },
          { uniqueId: '16', task: 'Molly11', description: ' Done description description description description description' },
        ]
      }
    ];

    this.tableSummary.emit({
      textLabel: 'To-do',
      contentAmount: this.tabList[0]['list'].length,
      amountChecked: 0
    });
  }

  check(checkedItems) {
    this.checked.emit(checkedItems);
  }

  switchTab(tabChangeEvent) {
    tabChangeEvent.tab.amountChecked = 0;
    this.shareTableSummary(tabChangeEvent);
  }

  doneRedo(row) {
    event.stopPropagation();
    let isRemoved = false;
    for (const tab of this.tabList) {
      if (isRemoved === true) {
        tab['list'].push(row);
        continue;
      }

      for (const item of tab['list']) {
        if (!row) {
          break;
        } else if (item.uniqueId === row.uniqueId) {
          tab['list'].splice(tab['list'].indexOf(item), 1);
          isRemoved = true;
          tab['amountChecked'] = 0;
          tab['contentAmount'] = tab['list'].length;
          tab['textLabel'] = tab['name'];
          this.tableSummary.emit(tab);
          break;
        }
      }

      if (isRemoved === false) {
        tab['list'].push(row);
      }
    }
  }

  addRow(row) {
    this.tabList[0]['list'].push(row);
  }

  private shareTableSummary(e) {
    for (const tab of this.tabList) {
      if (tab['name'] === e.tab.textLabel) {
          e.tab.contentAmount = tab['list'].length;
      }
    }
    this.tableSummary.emit(e.tab);
  }
}
