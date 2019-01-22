import { Component, OnInit } from '@angular/core';

import { DataFormat } from './models/data.interface';

@Component({
  selector: 'input-dashboard',
  styleUrls: ['input-dashboard.component.scss'],
  template: `
    <div>
        Enter an amount: $
        <input 
            type="number" 
            (input)="handleInput($event)"
            (focus)="handleFocus($event)">
        <button class="button" (click)="handleClick()">
            Calculate
        </button>
        <div>
            <ask-component
                [calculate]="calculate"
                [calculateData]="calculateData">
            </ask-component>
            <want-component
                [calculate]="calculate"
                [calculateData]="calculateData">
            </want-component>
        </div>
    </div>
  `
})
export class InputDashboardComponent {
    calculateData: DataFormat = {
        enteredNum: 0,
        askValue: 0,
        wantValue: 0
    };
    calculate: boolean;
    handleClick() {
        this.calculateData.askValue = this.calculateData.enteredNum - (0.029 * this.calculateData.enteredNum + 0.3);
        this.calculateData.wantValue = (this.calculateData.enteredNum + 0.3) / 0.971;
        console.log(this.calculateData.askValue);
        console.log(this.calculateData.wantValue);

        if(this.calculateData.enteredNum > 0)
            this.calculate = true;
    }
    handleInput(event: any) {
        this.calculateData.enteredNum = event.target.valueAsNumber;
    }
    handleFocus(event: any) {
        this.calculate = false;
    }
}
