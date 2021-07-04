import { Component } from '@angular/core';
import { ChildCompo2Component } from './child-compo2/child-compo2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router-outlet-events';

  onActivate(component: ChildCompo2Component) {
    component.anyString = "Defined through parent component"
  }
}