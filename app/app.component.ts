import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <input-dashboard></input-dashboard>
      <history-dashboard></history-dashboard>
    </div>
  `
})
export class AppComponent {}

