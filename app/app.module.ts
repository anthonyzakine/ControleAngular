import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { Router } from './app.routing';
import { DashboardComponent } from './components/ToDoComponent';
import { ArchiveComponent } from './components/ToDoArchiveComponent';

import { AppComponent }  from './app.component';
import { ListeTaskDirective } from "./directive/listeTask.dir";
import { AddTaskDirective } from "./directive/add.task.dir";


@NgModule({
  imports: [ BrowserModule ,FormsModule,Router],
  declarations: [ AppComponent ,ListeTaskDirective,AddTaskDirective,DashboardComponent,ArchiveComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { 



}
