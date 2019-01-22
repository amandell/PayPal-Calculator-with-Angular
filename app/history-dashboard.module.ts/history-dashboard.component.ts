import { Component, OnInit } from '@angular/core';

import { HistoryFormat } from './models/history.interface';

@Component({
  selector: 'history-dashboard',
  styleUrls: ['history-dashboard.component.scss'],
  template: `
    <div>
        <h3 style="text-align:left">History</h3>
        <table class="history-table">
            <tr>
                <th class="history-header-row">Initial</th>
                <th class="history-header-row">Ask</th> 
                <th class="history-header-row">Want</th>
            </tr>
            <tr *ngFor="let data of historyData;">
                <td class="history-row"> $ {{ data.inputValue | number: '1.2-2' }} </td>
                <td class="history-row"> $ {{ data.askValue | number: '1.2-2' }} </td>
                <td class="history-row"> $ {{ data.wantValue | number: '1.2-2' }} </td>
            </tr>
        </table>
    </div>
  `
})
export class HistoryDashboardComponent {
    historyData: HistoryFormat[] = [
        {
            inputValue:10,
            askValue:9.41,
            wantValue:10.61
        },
        {
            inputValue:100,
            askValue:96.80,
            wantValue:103.30
        },
        {
            inputValue:1000,
            askValue:970.70,
            wantValue:1030.18
        },
        {
            inputValue:10000,
            askValue:9709.70,
            wantValue:10298.97
        }
    ]
}
