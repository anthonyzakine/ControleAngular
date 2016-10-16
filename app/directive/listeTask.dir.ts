// Import des composants nécessaire à la création de la directive : à propos des directives https://goo.gl/fGh7QS 
import {Component, Input,Output,EventEmitter} from "@angular/core";

import { Config } from '../config';
import {TaskItem} from "../model/task.model";

// Configuration de la directive
@Component({
    selector: 'list-team',
    templateUrl: 'app/vue/directive/liste_task.html',
})

// Export de la class de la directive
export class ListeTaskDirective {
    
    editer = Config.EDIT;
 
    
    @Input() item: TaskItem;


    // L’utilisation de la fonction de la class Output permet d'envoyer dans la directive les données vers un autre composant.
    // La création d’un instance de EventEmitter() permet de créer un événement personnalisé.
    @Output() DeleteTaskData = new EventEmitter();

    deleteTask(event: any){
        this.DeleteTaskData.emit(this.item);
    };

}