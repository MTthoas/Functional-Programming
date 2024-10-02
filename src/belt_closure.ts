import { A } from "@mobily/ts-belt";

export class Belt_Closure {
    constructor() { }

    // EXO 1 : Crée une fonction createCounter qui utilise une closure pour maintenir un compteur privé.
    // Chaque appel à la fonction renvoie une fonction qui incrémente et renvoie le compteur actuel.
    public createCounter() {
        // TODO: Crée une variable count ici
        // TODO: Retourne une fonction qui incrémente count et le retourne
        let count = 0;
        return () => {
            count++;
            return count;
        }
    }

    // EXO 2 : Crée une fonction createMultiplier qui prend un facteur en paramètre 
    // et retourne une fonction qui multiplie un nombre par ce facteur.
    public createMultiplier(factor: number) {
        let count = 0;
        return (num: number) => {
            count++;
            return num * factor;
        }
    }

    // EXO 3 : Crée une fonction applyOperation qui prend une fonction d'opération
    // (comme addition ou multiplication) et renvoie une nouvelle fonction qui applique 
    // cette opération à deux arguments.
    public applyOperation(operation: (a: number, b: number) => number) {
        return (a: number, b: number) => operation(a, b);
    }
}