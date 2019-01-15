import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CounterComponent } from './components/counter/counter.component';
import { CheckBoxSelectionComponent } from './components/check-box-selection/check-box-selection.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RowDetailDialogComponent } from './row-detail-dialog/row-detail-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    CounterComponent,
    CheckBoxSelectionComponent,
    RowDetailDialogComponent
  ],
  entryComponents: [
    RowDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    NgxDatatableModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
