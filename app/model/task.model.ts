// Création d'un model de données : à propos des models https://goo.gl/DsFwMk
export class TaskItem {
    // Création de la variable
    public id: number;
    public name: string;

    // Création du constructeur
    constructor(data: any){
        // Définition de la variable
        this.id = data.id;
        this.name = data.name;
    }
}