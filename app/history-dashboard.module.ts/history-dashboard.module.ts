import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { HistoryDashboardComponent } from './history-dashboard.component';

// components


@NgModule({
  declarations: [
    HistoryDashboardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HistoryDashboardComponent
  ]
})
export class HistoryDashboardModule {}
