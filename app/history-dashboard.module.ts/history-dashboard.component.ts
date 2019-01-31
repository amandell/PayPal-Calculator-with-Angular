import { Component, OnInit, Injectable, Input } from '@angular/core';

import { HistoryFormat } from './models/history.interface';

import { HistoryDashboardService } from './history-dashboard.service';

@Component({
  selector: 'history-dashboard',
  styleUrls: ['history-dashboard.component.scss'],
  template: `
    <div *ngIf="historyData?.length > 0" style="padding:40px 0px">
        <h3 style="text-align:left;">History</h3>
        <table class="history-table">
            <tr>
                <th class="history-header-row">Initial</th>
                <th class="history-header-row">Ask</th> 
                <th class="history-header-row">Want</th>
            </tr>
            <tr class="history-row" *ngFor="let data of historyData;">
                <td> $ {{ data.inputValue | number: '1.2-2' }} </td>
                <td> $ {{ data.askValue | number: '1.2-2' }} </td>
                <td> $ {{ data.wantValue | number: '1.2-2' }} </td>
            </tr>
        </table>
    </div>
  `
})
@Injectable()
export class HistoryDashboardComponent implements OnInit{
    @Input()
    historyData: HistoryFormat[];

    constructor(private historyService: HistoryDashboardService) {}

    ngOnInit() {
        this.historyService.getHistory()
        .subscribe((data: HistoryFormat[]) => this.historyData = data);
    }

}
