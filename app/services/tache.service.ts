import { Injectable } from '@angular/core';
import {TaskItem} from "../model/task.model";
import {TASK} from "../datas/task.data";


@Injectable()

export class TaskService {
    getTasks(): TaskItem[]{
        return TASK;
     };
};