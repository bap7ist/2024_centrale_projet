import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';

// Composant avec un template et un style séparé
@Component({
  selector: 'app-angular-et-typescript', // Le nom du selector html du composant
  templateUrl: './angular-et-typescript.component.html', // Le fichier de template séparé
  styleUrls: ['./angular-et-typescript.component.css'], // Le fichier de styles séparé
})
export class AngularEtTypescriptComponent
  implements OnInit, OnChanges, OnDestroy
{
  // Input: permet de recevoir une valeur du composant parent (ici de type string)
  @Input() title: string = 'Default Title';

  // Output: permet d'envoyer un événement au composant parent (ici de type string)
  @Output() clicked = new EventEmitter<string>();

  // variable locale du composant
  public description: string =
    'Ceci est une description du composant Angular et TypeScript.';

  // Cette méthode est appelée automatiquement lorsque le composant est initialisé
  public ngOnInit(): void {
    console.log('Composant initialisé !');
  }

  // Cette méthode est appelée automatiquement à chaque fois que les inputs changent
  public ngOnChanges(): void {
    console.log('Inputs ont changé');
  }

  // Cette méthode est appelée automatiquement lorsque le composant est détruit
  public ngOnDestroy(): void {
    console.log('Le composant est détruit');
  }

  // Fonction custom du composant
  public onButtonClick(): void {
    console.log('Bouton cliqué'); // Ecris dans la console du navigateur
    this.clicked.emit('Le bouton a été cliqué!'); // Utilise l'output pour émettre le message au parent
  }

  // Le constructor du composant
  public constructor(/** ici toutes les dépendances à injecter dans le composant (services par exemple) */) {}

  // TYPESCRIPT :

  public lesFonctionsTypescript(): void {
    /**
     * MAP : Parcourt un tableau et retourne un nouveau tableau avec les résultats de l'application d'une fonction sur chaque élément.
     */
    const numbers1 = [1, 2, 3, 4];
    const doubled = numbers1.map((num) => num * 2); // [2, 4, 6, 8]

    /**
     * FILTER : Filtre un tableau en fonction d'une condition, et retourne un nouveau tableau avec les éléments qui respectent cette condition.
     */
    const numbers2 = [1, 2, 3, 4];
    const evenNumbers = numbers2.filter((num) => num % 2 === 0); // [2, 4]

    /**
     * REDUCE : Réduit un tableau à une seule valeur en appliquant une fonction sur chaque élément, en cumulant les résultats.
     */
    const numbers3 = [1, 2, 3, 4];
    const sum = numbers3.reduce((acc, num) => acc + num, 0); // 10

    /**
     * FOR EACH : Parcourt un tableau et exécute une fonction sur chaque élément (ne retourne rien).
     */
    const numbers4 = [1, 2, 3];
    numbers4.forEach((num) => console.log(num)); // Affiche 1, 2, 3

    /**
     * FIND : Retourne le premier élément qui correspond à une condition, ou undefined si aucun élément ne correspond.
     */
    const numbers5 = [1, 2, 3, 4];
    const found = numbers5.find((num) => num > 2); // 3

    /**
     * FIND INDEX : Retourne l'index du premier élément qui correspond à une condition, ou -1 si aucun élément ne correspond.
     */
    const numbers6 = [1, 2, 3, 4];
    const index = numbers6.findIndex((num) => num > 2); // 2 (car 3 est à l'index 2)

    /**
     * SOME : Retourne true si au moins un élément du tableau satisfait la condition donnée.
     */
    const numbers7 = [1, 2, 3, 4];
    const hasEven = numbers7.some((num) => num % 2 === 0); // true

    /**
     * EVERY : Retourne true si tous les éléments du tableau satisfont la condition donnée.
     */
    const numbers8 = [2, 4, 6];
    const allEven = numbers8.every((num) => num % 2 === 0); // true

    /**
     * CONCAT : Concatène deux ou plusieurs tableaux et retourne un nouveau tableau.
     */
    const array1 = [1, 2];
    const array2 = [3, 4];
    const merged = array1.concat(array2); // [1, 2, 3, 4]

    /**
     * SLICE : Retourne une partie d'un tableau sans le modifier. On spécifie l'index de début et l'index de fin (non inclus)
     */
    const numbers9 = [1, 2, 3, 4, 5];
    const sliced = numbers9.slice(1, 3); // [2, 3]

    /**
     * SPLICE : Modifie un tableau en supprimant, remplaçant ou ajoutant des éléments. Retourne les éléments supprimés.
     */
    const numbers10 = [1, 2, 3, 4];
    numbers10.splice(2, 1); // Supprime l'élément à l'index 2 => [1, 2, 4]

    /**
     * SORT : Trie les éléments d'un tableau. Par défaut, les éléments sont triés comme des chaînes de caractères.
     */
    const numbers11 = [4, 2, 5, 1];
    numbers11.sort((a, b) => a - b); // Trie de façon croissante => [1, 2, 4, 5]

    /**
     * INCLUDES : Retourne true si le tableau contient l'élément spécifié.
     */
    const numbers12 = [1, 2, 3, 4];
    const hasThree = numbers12.includes(3); // true

    /**
     * JOIN : Concatène tous les éléments d'un tableau en une chaîne de caractères, séparés par une chaîne spécifiée.
     */
    const numbers = [1, 2, 3];
    const joined = numbers.join('-'); // "1-2-3"

    /**
     * Objet.keys: Retourne un tableau contenant les clés d'un objet.
     */
    const person1 = { name: 'John', age: 30 };
    const keys = Object.keys(person1); // ['name', 'age']

    /**
     * Objet.values : Retourne un tableau contenant les valeurs d'un objet.
     */
    const person2 = { name: 'John', age: 30 };
    const values = Object.values(person2); // ['John', 30]

    /**
     * Objet.entries : Retourne un tableau de paires [clé, valeur] d'un objet.
     */
    const person = { name: 'John', age: 30 };
    const entries = Object.entries(person); // [['name', 'John'], ['age', 30]]

    /**
     * SetTimeOut: Exécute une fonction après un délai spécifié.
     */
    setTimeout(() => {
      console.log('Exécuté après 2 secondes');
    }, 2000);

    /**
     * SetInterval : Exécute une fonction à intervalles réguliers (toutes les x millisecondes).
     */
    const intervalId = setInterval(() => {
      console.log('Exécuté toutes les secondes');
    }, 1000);

    // Pour stopper l'intervalle
    clearInterval(intervalId);
  }
}
