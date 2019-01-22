import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// containers
import { InputDashboardComponent } from './input-dashboard.component';

// components
import { AskComponent } from './components/ask-component';
import { WantComponent } from './components/want-component';

@NgModule({
  declarations: [
    InputDashboardComponent,
    AskComponent,
    WantComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDashboardComponent
  ]
})
export class InputDashboardModule {}
