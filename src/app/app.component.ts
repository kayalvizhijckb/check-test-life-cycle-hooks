import { Component,OnInit,OnDestroy} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy  {
  showheader: boolean = false;
  showtag:boolean=false;
  
  
  title = 'checktest';
value: String|undefined;
  

  buttonToggle(){
    this.showtag=!this.showtag;
  }


  ngOnDestroy(): void {
    console.log("component Destroyed")
  }
  ngOnInit(): void {
    console.log("component Initialized")
  }
}
