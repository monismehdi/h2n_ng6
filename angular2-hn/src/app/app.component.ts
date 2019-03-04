import { Component, ViewEncapsulation } from '@angular/core';

import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-root',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2-hn';
}
