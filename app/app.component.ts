import { Component,OnInit } from '@angular/core';

import { Config } from './config';
// Import des class pour configurer des routes dynamiques : à propos des routes dynamiques https://goo.gl/Qe53YN
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import {TaskItem} from "../app/model/task.model";
import { TaskService } from "../app/services/tache.service";


@Component({
    selector: 'my-app',
    templateUrl: 'app/vue/index.html',
    providers: [TaskService],
})
export class AppComponent  { 

    

}
