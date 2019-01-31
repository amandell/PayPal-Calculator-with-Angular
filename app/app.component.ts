import { Component } from '@angular/core';
import { HistoryFormat } from './history-dashboard.module.ts/models/history.interface';

import { HistoryDashboardService } from './history-dashboard.module.ts/history-dashboard.service';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input-dashboard
      (change)="handleChange($event)">
      </input-dashboard>
      <history-dashboard
        [historyData]="historyData">
      </history-dashboard>
    </div>
  `
})
export class AppComponent {

  historyData: HistoryFormat[];

  constructor(private historyService: HistoryDashboardService) {}

  handleChange() {
    this.historyService.getHistory()
    .subscribe((data: HistoryFormat[]) => this.historyData = data);
  }
}

