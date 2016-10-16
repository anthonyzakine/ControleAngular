import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {TaskItem} from "../model/task.model";

@Injectable()

export class TaskService {

    private taskUrl = 'app/TaskDB';

    // Création d'une variable pour la gestion des erreurs
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };

    // Ajout du service Http dans le constructor
    constructor(private http: Http) { };

    // Modification de la fonction getStudent
    getTasks(): Promise<TaskItem[]> {

        // Utilisation de la fonction .get()
        return this.http.get(this.taskUrl)
            // Appel de la promesse
            .toPromise()
            // Utilisation de la fonction .then() : alimentation du jeu de données
            .then(response => response.json().data as TaskItem[])
            // Capture du code erreur
            .catch(this.handleError);

    };
    getTask(id: number): Promise<TaskItem> {
        return this.getTasks().then(students => students.find(singleStudent => singleStudent.id === id));
    };
};