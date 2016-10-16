import { Component,OnInit } from '@angular/core';

import { Config } from './config';
//importer le model
import {TaskItem} from "../app/model/task.model";
//importer mes données 
import {TASK} from "../app/datas/task.data";


@Component({
    selector: 'my-app',
    templateUrl: 'app/vue/index.html',
})
export class AppComponent implements OnInit { 

    ListeTask:TaskItem[] ;

    //on initialise la liste de tache au lancement de la page
     ngOnInit(): void {
         this.ListeTask = TASK;
    }

}
