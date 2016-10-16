import { InMemoryDbService } from 'angular-in-memory-web-api';
import {TaskItem} from "../model/task.model";

// Export de l'API "in memory"
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
    
    // Cette variable définie le contenu de l'API et son adresse
    let TaskDB = [
            new TaskItem({ id: 1, name: 'Faire a manger' }),
            new TaskItem({ id: 2, name: 'Boire' }),
            new TaskItem({ id: 3, name: 'Courir' }),
            new TaskItem({ id: 4, name: 'Danser' }),
            new TaskItem({ id: 5, name: 'Courses' }),
            new TaskItem({ id: 6, name: 'Lire' }),

    ];

    return {TaskDB};
  }
}
