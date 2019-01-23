import { Component, Input } from '@angular/core';

import { DataFormat } from '../models/data.interface';

@Component({
  selector: 'ask-component',
  styleUrls: ['components.scss'],
  template: `
    <div class="left" *ngIf="calculate==true">
        <span class="container-text">
          If you ask for 
          <span style="font-weight:bold;">
            $ {{ calculateData.inputValue | number: '1.2-2' }}
          </span> 
          , you'll receive 
          <span style="font-weight:bold;">
          $ {{ calculateData.askValue | number: '1.2-2'}}
          </span>
        </span>
    </div>
  `
})
export class AskComponent {
    @Input()
    calculateData: DataFormat;
    @Input()
    calculate: boolean;
}