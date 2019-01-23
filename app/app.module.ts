import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { InputDashboardModule } from './input-dashboard.module.ts/input-dashboard.module';
import { HistoryDashboardModule } from './history-dashboard.module.ts/history-dashboard.module';

//service
import { HistoryDashboardService } from './history-dashboard.module.ts/history-dashboard.service';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    //import modules
    BrowserModule,
    CommonModule,

    //custom modules
    InputDashboardModule,
    HistoryDashboardModule
  ],
  providers: [
    HistoryDashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}