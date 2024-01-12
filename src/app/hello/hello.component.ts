import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent  {

  constructor() { }

  
  ngOnDestroy(): void {
    console.log("component Destroyed")
  }
  ngOnInit(): void {
    console.log("component Initialized")
  }
}
