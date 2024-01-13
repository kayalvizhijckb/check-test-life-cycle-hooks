import { Component, OnInit,OnChanges,DoCheck,AfterContentInit,AfterViewChecked,AfterViewInit,AfterContentChecked,OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-parent-life-cycle-hooks',
  templateUrl: './parent-life-cycle-hooks.component.html',
  styleUrls: ['./parent-life-cycle-hooks.component.scss']
})
export class ParentLifeCycleHooksComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
    @Input() value:String | undefined;
  constructor() {
    console.log("parent constructor");
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("parent onchanges");
  }
  ngOnInit(): void {
    console.log("parent OnInit");
  }
  ngDoCheck(): void {
    console.log("parent Docheck");
    
  }
  ngAfterContentInit(): void {
    console.log("parent aftercontentInit");
    
  }
  ngAfterContentChecked(): void {
    console.log("parent afterContentChecked");
    
  }
  ngAfterViewInit(): void {
    console.log("parent afterviewInit");
    
  }
  ngAfterViewChecked(): void {
    console.log("parent afterviewChecked");
    
  }
  ngOnDestroy(): void {
    console.log("parent onDestroy");
    
  }

}
