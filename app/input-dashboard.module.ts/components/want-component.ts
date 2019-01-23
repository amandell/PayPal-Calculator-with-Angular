import { Component, Input } from '@angular/core';

import { DataFormat } from '../models/data.interface';

@Component({
  selector: 'want-component',
  styleUrls: ['components.scss'],
  template: `
    <div class="right" *ngIf="calculate==true">
        <span class="container-text">
          If you want 
          <span style="font-weight:bold;">
            $ {{ calculateData.inputValue | number: '1.2-2' }}
          </span> 
          , you'll have to ask for 
          <span style="font-weight:bold;">
            $ {{ calculateData.wantValue | number: '1.2-2'}}
          </span>
        </span>
    </div>
  `
})
export class WantComponent {
    @Input()
    calculateData: DataFormat;
    @Input()
    calculate: boolean;
}