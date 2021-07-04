import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-compo2',
  templateUrl: './child-compo2.component.html',
  styleUrls: ['./child-compo2.component.scss']
})
export class ChildCompo2Component implements OnInit {

  @Input() anyString = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
