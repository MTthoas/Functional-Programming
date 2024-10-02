import { D } from "@mobily/ts-belt";

type Object = {
    name: string;
    price: number;
    stock: boolean;
}

interface ObjectCategory extends Object {
    category: string;
}

interface ObjectWithALotOfProperties extends ObjectCategory {
    brand: string,
    processor: string,
}


export class Belt_Dict {
    private objf: Object;
    private objf2: ObjectCategory;
    private objf3: ObjectWithALotOfProperties
    constructor() {
        this.objf = { name: "Laptop", price: 1000, stock: true };
        this.objf2 = { name: "Laptop", price: 1000, stock: true, category: "Electronics" };
        this.objf3 = { name: "Laptop", price: 1000, stock: true, category: "Electronics", brand: "Apple", processor: "M1" };
    }

    // Exercice 1: Supprimer une clé d'un objet avec deleteKey.
    public DictFn1 = () => {
        const newObj = D.deleteKey(this.objf, "stock");
        return newObj;
    };

    // Exercice 3:
    // extract les propriétés dans la valeur est un nombre, 
    //puis reconstruire un objet avec ces propriétés et values
    public DictFn3 = () => {
        return D.filterWithKey(this.objf, (_key, value) => typeof value === 'number');
    };

    // // Exercice 4: Filtrer l'objet obj pour ne conserver que les propriétés dont le nom commence par 'p'.
    public DictFn4 = () => {
        return D.filterWithKey(this.objf, (key, _value) => key.startsWith('p'));
    };

    // // Exercice 6:Récupéer price avec get et stock avec getUnsafe et regarder les résultats en typescript
    public DictFn6 = () => {
        const price = D.get(this.objf, "price");
        const stock = D.getUnsafe(this.objf, "stock");
        return { price, stock };
    };

    // // Exercice 7: supprimer toutes les keys d'un obj, et vérifier à la fin si l'objet est vide
    public DictFn7 = () => {
        const newObj = D.deleteKeys(this.objf, ["name", "price", "stock"]);
        return D.isEmpty(newObj);
    };

    // // Exercice 8: créer un nouvel obj en faisant un update du price to 2000,
    // et ensuite comparer si le prix des 2 objects est différent, si il est différent retourner "Les prix sont différents", sinon retourner "Les prix sont identiques"
    public DictFn8 = () => {
        const newObj = D.update(this.objf, "price", () => 2000);
        return D.get(this.objf, "price") !== D.get(newObj, "price") ? "Les prix sont différents" : "Les prix sont identiques";
    };

}