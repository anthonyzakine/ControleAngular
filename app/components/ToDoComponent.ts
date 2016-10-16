import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Config } from '../config';
import {TaskItem} from "../model/task.model";
import { TaskService } from "../services/tache.service";


@Component({
    selector: 'dashboard-page',
    templateUrl: 'app/vue/components/dashboard.html',
    providers: [TaskService],
})

export class DashboardComponent  implements OnInit{

    ListeTask:TaskItem[] =[];

    selectedTask: TaskItem;
    newTask:TaskItem;
    //ajout dans la liste une tache
    addNewTask(task:TaskItem){
        this.ListeTask.push(task);
        this.resetInput();

    }
    onSelect(task: TaskItem){
        this.selectedTask = task;
    };
    //init l'input pour pouvoir en rajouter plusieurs
    resetInput(){
        this.newTask = {id: 0, name: ''}
    }
    //supprime une tache en fonction de son id
    deleteTask(task:TaskItem){
        this.ListeTask.splice(task.id, 1);
    }

    TaskList: TaskItem[];

     constructor(
        private taskService: TaskService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

     ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.taskService.getTask(id).then(data => this.newTask = data);
        })
    };
    

 }