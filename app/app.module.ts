import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { InputDashboardModule } from './input-dashboard.module.ts/input-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,

    InputDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}