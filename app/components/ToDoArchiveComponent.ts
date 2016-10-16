import { Component } from '@angular/core';
import { Config } from '../config';
import {TaskItem} from "../model/task.model";
import { TaskService } from "../services/tache.service";


@Component({
    selector: 'archive-page',
    templateUrl: 'app/vue/components/archive.html',
    providers: [TaskService],
})

export class ArchiveComponent {
    studentsList: TaskItem[];
    
    constructor( private studentService: TaskService ){
        this.studentsList = this.studentService.getTasks();
    };
 }