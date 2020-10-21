import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*Any values in here could be interpolated
  into app component, and be rendered immediately!*/
  title = 'Tour of Heroes';
}
