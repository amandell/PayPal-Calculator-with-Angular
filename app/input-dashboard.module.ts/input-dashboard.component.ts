import { Component, OnInit } from '@angular/core';

import { HistoryFormat } from '../history-dashboard.module.ts/models/history.interface';

import { HistoryDashboardService } from '../history-dashboard.module.ts/history-dashboard.service';

@Component({
  selector: 'input-dashboard',
  styleUrls: ['input-dashboard.component.scss'],
  template: `
    <div class="dashboard">
        Enter an amount: $
        <input 
            type="number" 
            (input)="handleInput($event)"
            (focus)="handleFocus($event)">
        <button class="button" (click)="handleClick()">
            Calculate
        </button>
    </div>
    <div style="padding:20px 0px;">
        <ask-component
            [calculate]="calculate"
            [calculateData]="calculateData">
        </ask-component>
        <want-component
            [calculate]="calculate"
            [calculateData]="calculateData">
        </want-component>
    </div>
  `
})
export class InputDashboardComponent {
    calculateData: HistoryFormat = {
        inputValue: 0,
        askValue: 0,
        wantValue: 0
    };
    calculate: boolean;

    constructor(private historyService: HistoryDashboardService) {}

    handleClick() {
        this.calculateData.askValue = this.calculateData.inputValue - (0.029 * this.calculateData.inputValue + 0.3);
        this.calculateData.wantValue = (this.calculateData.inputValue + 0.3) / 0.971;

        if(this.calculateData.inputValue > 0)
            this.calculate = true;

        this.historyService.postHistory(this.calculateData)
        .subscribe();
    }
    handleInput(event: any) {
        this.calculateData.inputValue = event.target.valueAsNumber;
    }
    handleFocus(event: any) {
        this.calculate = false;
    }
}
