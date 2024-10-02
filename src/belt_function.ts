import { A, O, pipe, F, R } from "@mobily/ts-belt";

interface User {
    name: string;
}

const ListProduct = [
    { name: 3, price: 1000, inStock: 3 },
    { name: 3, price: 1000, inStock: 3 },
    { name: 3, price: 1000, inStock: 3 },
];

export class Belt_Function {
    constructor() { }

    // Exercice 1: Exécuter une fonction après plusieurs appelsFonctions à utiliser : after, always, identity
    // Objectif : Crée une fonction qui retourne toujours 'Appel réussi' après avoir été appelée 3 fois,
    // puis renvoie la valeur d'origine avec identity.
    public functionFn1 = () => {
        const afterThreeCalls = F.after(3, () => 'Appel réussi');
        const always = F.always(afterThreeCalls);
        const identity = F.identity(always);
        return identity
    }

    // Exercice 2: Appliquer plusieurs prédicats et vérifier si tous sont satisfaitsFonctions à utiliser : allPass, tap, when, identity
    // Objectif : Vérifie si un nombre est supérieur à 10 et pair. Si oui, affiche 'Validé', 
    // sinon retourne simplement la valeur d'origine avec identity.
    public functionFn2 = () => {
        const number = 7;

        const allPass = F.allPass([
            (value: number) => value > 10,
            (value: number) => value % 2 === 0
        ]);

        const tap = F.tap((value: number) => console.log('Validé'));
        const when = F.when(allPass, tap);
        const identity = F.identity(when(number));
        return identity
    }

    // Exercice 3: Limiter le nombre d'appels d'une fonctionFonctions à utiliser : before, always, identity
    // Objectif : Crée une fonction qui ne peut être appelée que deux fois, 
    // renvoyant toujours 'Fonction limitée' pendant ces deux appels, puis renvoie l'identité après cela.Données :
    public functionFn3 = () => {
        const limit = 3;
        const before = F.before(limit, () => 'Fonction limitée');
        const always = F.always(before);
        const identity = F.identity(always);

        for (let i = 0; i < 4; i++) {
            console.log(identity)
        }

        return identity
    }

    // Exercice 7: crée une fonction utilisant une close qui prend un argument, la première fois qu'on l'utilise elle retourne "One shot" puis ensuite elle retourne "Too late" de manière fonctionnel
    public functionFn7 = () => {
        const oneShot = F.once(() => 'One shot');
        const always = F.always(oneShot);
        const identity = F.identity(always);
        return identity
    }



}