import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// containers
import { HistoryDashboardComponent } from './history-dashboard.component';


@NgModule({
  declarations: [
    HistoryDashboardComponent,
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    HistoryDashboardComponent
  ]
})
export class HistoryDashboardModule {}
