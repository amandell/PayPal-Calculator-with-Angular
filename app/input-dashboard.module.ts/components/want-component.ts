import { Component, Input } from '@angular/core';

import { DataFormat } from '../models/data.interface';

@Component({
  selector: 'want-component',
  styleUrls: ['components.scss'],
  template: `
    <div class="right" *ngIf="calculate==true">
        If you want $ {{ calculateData.enteredNum | number: '1.2-2' }} , you'll have to ask for $ {{ calculateData.wantValue | number: '1.2-2'}}
    </div>
  `
})
export class WantComponent {
    @Input()
    calculateData: DataFormat;
    @Input()
    calculate: boolean;
}