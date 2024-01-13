import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ParentLifeCycleHooksComponent } from './parent-life-cycle-hooks/parent-life-cycle-hooks.component';
import { ChildLifeCycleHooksComponent } from './child-life-cycle-hooks/child-life-cycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentLifeCycleHooksComponent,
    ChildLifeCycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
