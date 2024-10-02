import { A, O, pipe, F, R } from "@mobily/ts-belt";

export class Belt_Options {
    private item = 'Laptop';
    private value = 75;
    constructor(){}

    // Exercice 1: Vérifier et filtrer une option, puis obtenir une valeur par défautFonctions à utiliser : fromNullable, filter, getWithDefaultObjectif : 
    // Créer une option à partir de 'Laptop', filtrer les options contenant la lettre 'L', puis obtenir la valeur par défaut 'No Item' si l'option est vide.
    public optionFn1 = () => {
        const option = O.fromNullable(this.item);
        const map = O.map(option, (value) => value.includes('L'));
        return { map: map}
    }

    // Exercice 2: Transformer une option à partir d'un prédicat, puis extraire une valeurFonctions à 
    // utiliser : fromPredicate, map, getWithDefault. Objectif : Créer une option à partir d'un prédicat (valeur > 50), 
    // transformer cette option en multipliant la valeur par 2, puis obtenir une valeur par défaut de 0 si l'option est vide.
    public optionFn2 = (arr: Array<number>) => {
        const product = pipe(
            arr,
            A.find((value) => value > 50),
            O.map((value) => value * 2)
        )
        if (O.isNone(product)) {
            return 0
        }
        return product
    }

    // Exercice 3: Associer deux options et appliquer une fonctionFonctions à utiliser : fromNullable, zipWith, map
    // Objectif :
    //  Associer deux options, puis utiliser une fonction pour ajouter les deux valeurs ensemble, et enfin transformer le résultat pour afficher une chaîne.
    public optionFn3 = () => {
        const product = pipe(
            O.fromNullable('hello'),
            O.zipWith(O.fromNullable('world'), (a, b) => a + b),
            O.map((value) => value)
        )
        return product
    }

    // Exercice 4: Vérifier une option, appliquer une transformation, puis obtenir le résultat sous forme nullableFonctions à utiliser : fromNullable, isSome, map, toNullable
    //Objectif : Créer une option à partir d'une valeur, vérifier si elle est présente, appliquer une transformation en augmentant de 10%, puis retourner cette option sous forme nullable.
    public optionFn4 = () => {
        const test = 1000
        // Retourne true si la valeur est présente, sinon false, puis applique une transformation en augmentant de 10%.
        const product = pipe(
            O.fromNullable(test), 
            // O.isSome, boolean => boolean ? test * 1.1 : null,
            O.map((value) => value * 1.1),
            O.toNullable) 
        return product
    }

    private  riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 150;
        }
        throw new Error('Erreur');
    };

    // Exercice 5: Créer une option à partir d'une exécution, filtrer et extraire la valeur avec exceptionFonctions à utiliser : fromExecution, filter, getExn
    //Objectif : Transformer une exécution en option, filtrer les résultats supérieurs à 100, puis extraire la valeur avec exception si l'option est vide.
    public optionFn5 = () => {
        const product = pipe(
            [1, 2, 3, 4, 5], // Tableau source
            A.map(() => O.fromExecution(() => this.riskyFunction())), // Transformer chaque appel en option
            A.filter(O.isSome), // Filtrer pour garder uniquement les Some, Un some est une valeur qui existe
            A.map(O.getExn), // Extraire la valeur depuis les Some en lançant une exception si None
            A.filter((value) => value > 100) // Filtrer les valeurs supérieures à 100
         );
        return product
    }

    
    public fetchData = async (): Promise<string> => {
        if (Math.random() > 0.5) {
            return 'Données';
        }
        throw new Error('Erreur');
    };

    // Exercice 6: Créer une option à partir d'une promesse, appliquer une fonction,
    // et récupérer la valeur avec une exception. Fonctions à utiliser : fromPromise, map, getExn
    public optionFn6 = async () => {
        const product = pipe(
            O.fromPromise(this.fetchData()), // Créer une option à partir d'une promesse
            O.map((value) => value), // Appliquer une fonction
            O.getExn // Récupérer la valeur avec une exception
        );
        return  product
    };

    // Exercice 7: Transformer une option falsy en valeur par défaut et l'utiliser avec un tupleFonctions à utiliser : 
    // fromFalsy, getWithDefault, zip
    // Objectif : Créer une option à partir d'une valeur falsy, récupérer la valeur par défaut 'Inconnu',
    // Puis l'associer à une autre option pour former un tuple.
    public optionFn7 = () => {
        const value = '' as string;
        const option2 = O.fromNullable('Validé'); // Créer une option avec une valeur valide
        const option3 = O.fromFalsy(value); // Renverra None car '' est une valeur falsy
        const option4 = O.getWithDefault(option3, 'Inconnu'); // Renverra 'Inconnu' car option3 est None
        const result = O.zip(O.fromNullable(option4), option2); // Associe les options dans un tuple
        return result
    };
}