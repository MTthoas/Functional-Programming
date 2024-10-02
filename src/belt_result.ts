import { R, pipe } from "@mobily/ts-belt";

export class Belt_Result {
    private value: any;
    constructor() {
        this.value = null;
    }

    // Exercice 1: Transformer une exécution en Result, 
    // appliquer une transformation, puis obtenir la valeur par défautFonctions à utiliser : fromExecution, map, getWithDefaultObjectif : Transformer une exécution en Result, appliquer une transformation qui multiplie la valeur par 2, puis récupérer une valeur par défaut si l'exécution échoue.
    private riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 100;
        }
        throw new Error('Erreur');
    };
    public ResultFn1 = () => {
        const result = R.fromExecution(this.riskyFunction);
        const map = R.map(result, (value) => value * 2);
        return R.getWithDefault(map, 0);
    }

    // // Exercice 2: faire un pipe, fromNullable pour créer un result puis faire un tapError pour afficher l'erreur, puis faire un recover.
    public ResultFn2 = () => {
        const result = pipe(
            R.fromNullable(this.value, 'unknown'),
            R.catchError(err => {
                return R.Error(`${err} value`)
            }),
            R.recover(() => R.Ok('recovered'))
        );
        return result;
    }

    // // Exercice 4: Inverser ok et error
    public ResultFn4 = () => {
        const result = pipe(
            R.fromNullable(this.value, 'Error'),
            R.flip
        );
        return result;
    }




}