import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

// Importer du modul HttpModul : à propos du service HTTP https://goo.gl/S6imGs
import { HttpModule }    from '@angular/http';

// Gérénation d'une API "in memory"
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/memory.data';

import { Router } from './app.routing';
import { DashboardComponent } from './components/ToDoComponent';
import { ArchiveComponent } from './components/ToDoArchiveComponent';

import { AppComponent }  from './app.component';
import { ListeTaskDirective } from "./directive/listeTask.dir";
import { AddTaskDirective } from "./directive/add.task.dir";

import { TaskService } from "../app/services/tache.service";



@NgModule({
  imports: [ BrowserModule ,FormsModule,HttpModule,InMemoryWebApiModule.forRoot(InMemoryDataService),Router],
  declarations: [ AppComponent ,ListeTaskDirective,AddTaskDirective,DashboardComponent,ArchiveComponent],
   providers: [ TaskService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 



}
