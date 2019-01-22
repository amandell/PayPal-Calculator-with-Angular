import { Component, Input } from '@angular/core';

import { DataFormat } from '../models/data.interface';

@Component({
  selector: 'ask-component',
  styleUrls: ['components.scss'],
  template: `
    <div class="left" *ngIf="calculate==true">
        If you ask for $ {{ calculateData.enteredNum | number: '1.2-2' }} , you'll receive $ {{ calculateData.askValue | number: '1.2-2'}}
    </div>
  `
})
export class AskComponent {
    @Input()
    calculateData: DataFormat;
    @Input()
    calculate: boolean;
}