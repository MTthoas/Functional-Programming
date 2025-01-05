import { R, O, pipe } from "@mobily/ts-belt";

export class Belt_Result {
    private value: any;
    constructor() {
        this.value = null;
    }

    // Exercice 1: Transformer une exécution en Result, appliquer une transformation, puis obtenir la valeur par défaut
    private riskyFunction = () => {
        if (Math.random() > 0.5) {
            return 100;
        }
        throw new Error('Erreur random');
    };

    public ResultFn1 = () => {
        const result = R.fromExecution(() => this.riskyFunction());
        const transformed = R.map(result, (value) => value * 2);
        return R.getWithDefault(transformed, 0);
    };

    // Exercice 2: faire un pipe, fromNullable pour créer un result puis faire un tapError pour afficher l'erreur, puis faire un recover
    public ResultFn2 = () => {
        const result = pipe(
            R.fromNullable(this.value, 'unknown'),
            R.tapError((err) => {
                console.error(`Erreur capturée : ${err}`);
            }),
            R.recover(() => 'recovered')
        );
        return result;
    };

    // Exercice 4: Inverser ok et error
    public ResultFn4 = () => {
        const result = pipe(
            R.fromNullable(this.value, 'Error'),
            R.flip
        );
        return result;
    };

    // Exercice 5: fromExecution, puis utiliser match pour afficher le résultat ou une erreur puis convertir en option
    public resultFn5 = () => {
        const result = R.fromExecution(() => this.riskyFunction());

        // Gérer les cas manuellement sans R.match
        let message: string;
        if (R.isOk(result)) {
            message = `Résultat : ${result}`;
        } else {
            message = `Erreur : ${result}`;
        }

        // Convertir en Option<number>
        const optionResult = R.isOk(result) ? O.Some(result) : O.None;

        return {
            message, // Message résultant du traitement
            option: optionResult, // Option contenant le résultat ou None
        };
    };
}
