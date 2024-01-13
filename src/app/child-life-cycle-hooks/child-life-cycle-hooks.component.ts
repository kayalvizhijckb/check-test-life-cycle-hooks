import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-life-cycle-hooks',
  templateUrl: './child-life-cycle-hooks.component.html',
  styleUrls: ['./child-life-cycle-hooks.component.scss']
})
export class ChildLifeCycleHooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
