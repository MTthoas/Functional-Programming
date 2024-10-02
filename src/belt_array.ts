import { A, O, N, pipe } from "@mobily/ts-belt";

export type Product = {
    name: string;
    price: number;
    inStock: boolean;
};

interface ProductExtended extends Omit<Product, 'inStock'> {
    name: string;
    price: number;
    category: string;
    quantity: number;
};

export class Belt_Array {
    private products: Product[];
    private newProducts: Product[];
    private productExtended: ProductExtended[];
    constructor() {
        this.products = [
            { name: "oranges", price: 100, inStock: true },
            { name: "bananas", price: 0, inStock: false },
            { name: "apples", price: 50, inStock: true },
            { name: "pears", price: 0, inStock: false },
            { name: "babies", price: 30, inStock: true },
            { name: "planes", price: 1000, inStock: true },
        ];

        this.newProducts = [
            { name: "chili", price: 100, inStock: true },
            { name: "tomato", price: 0, inStock: false },
        ];

        this.productExtended = [
            { name: "oranges", price: 100, category: 'Fruit', quantity: 2 },
            { name: "bananas", price: 0, category: 'Fruit', quantity: 3 },
            { name: "apples", price: 50, category: 'Fruit', quantity: 4 },
            { name: "pears", price: 0, category: 'Fruit', quantity: 5 },
            { name: "babies", price: 30, category: 'Fruit', quantity: 6 },
            { name: "planes", price: 1000, category: 'Toys', quantity: 7 },
        ];
    }
    // Exercice 1: Vérifier si tous les produits sont en stock et leur nombre. 
    // Utilise Array.all (pour vérifier si tous les produits sont en stock).
    // Utilise Array.any (pour vérifier si au moins un produit n'est pas en stock).
    // Utilise Array.length (pour obtenir le nombre total de produits).
    public ArrayFn1 = (): Record<any, boolean | number> => {
        const allInStock = A.all(this.products, (product) => product.inStock);
        const anyOutOfStock = A.any(this.products, (product) => product.inStock === false);
        const totalProducts = A.length(this.products);

        return { allInStock, anyOutOfStock, totalProducts };
    }

    // Exercice 2: Ajouter des produits et récupérer un élément à une position donnée
    // Utilise Array.prepend (pour ajouter le produit Monitor au début de la liste)
    // .Utilise Array.append (pour ajouter le produit Keyboard à la fin de la liste).
    // Utilise Array.at (pour récupérer le produit à l'indice 2).

    public ArrayFn2 = () => {
        const newProducts = pipe(
            this.products,
            A.prepend({ name: "Monitor", price: 20, inStock: true }),
            A.append({ name: "Keyboard", price: 15, inStock: false })
        );

        const findIndex = newProducts.at(2)
        return { newProducts: newProducts, findIndex: findIndex }
    }

    // // Exercice 3: Fusionner et copier des listes.
    // Utilise Array.concat (pour combiner deux listes de produits).
    //Utilise Array.concatMany (pour ajouter plusieurs listes de produits).
    //Utilise Array.copy (pour créer une copie de la liste combinée).

    public ArrayFn3 = (newProduct: Product) => {
        const mergedProducts = pipe(
            this.products,
            A.concat([this.products[0], newProduct]),
        );

        const copiedProducts = A.copy(mergedProducts);

        return { mergedProducts: mergedProducts, copiedProducts: copiedProducts };
    }

    // // Exercice 4: Comparer deux inventaires.
    // Utilise Array.difference (pour obtenir les produits qui sont dans inventory1 mais pas dans inventory2).
    //Utilise Array.intersection (pour obtenir les produits présents dans les deux inventaires).
    //Utilise Array.union (pour obtenir tous les produits des deux inventaires sans doublons)
    public ArrayFn4 = (inventory1: Product[], inventory2: Product[]) => {
        const diff = A.difference(inventory1, inventory2);
        const inter = A.intersection(inventory1, inventory2);
        const union = A.union(inventory1, inventory2);

        return { diff, inter, union };
    }

    // // Exercice 5: Supprimer des produits selon des critères.
    //Utilise Array.drop (pour retirer le premier produit de la liste).
    //Utilise Array.dropExactly (pour retirer exactement deux produits depuis le début).
    // Utilise Array.dropWhile (pour retirer les produits tant qu'ils sont en stock)
    public ArrayFn5 = () => {
        const product = pipe(
            this.products,
            A.drop(1),
            A.dropWhile((product) => product.inStock)
        )

        return { product: product }
    };

    // // Exercice 6: Comparer des listes et tester l'inclusion.
    // Utilise Array.eq (pour comparer deux listes de produits).
    // Utilise Array.includes (pour vérifier si un produit spécifique est inclus dans la liste)
    public ArrayFn6 = () => {
        const product = pipe(
            this.products,
            A.eq(this.products, (a, b) => a.name === b.name)
        )
        const includes = A.includes(this.products, this.products[0]);
        return { product, includes };
    }

    // Exercice 7: Filtrer les produits par condition et index
    // Utilise Array.filter (pour garder uniquement les produits en stock).
    // Utilise Array.filterWithIndex (pour garder les produits à des indices pairs).
    //Utilise Array.filterMap (pour appliquer une transformation sur les produits filtrés).
    public ArrayFn7 = () => {
        const result = pipe(
            this.products,
            A.filter(product => this.products[0].inStock),
            A.filterWithIndex((index) => index % 2 === 0),
            A.filterMap(product => {
                if (product.price > 50) {
                    return product
                }
            }
            )
        )
        return { result }
    }

    // // Exercice 8: Trouver des produits selon des critères.
    // Utilise Array.find (pour trouver le produit dont le nom est Keyboard)
    // .Utilise Array.getIndexBy (pour trouver l'indice du produit dont le prix est 1000).
    // Utilise Array.get (pour récupérer le produit à l'indice 2)
    public ArrayFn8 = () => {
        const result = pipe(
            this.products,
            A.find(product => product.name === 'babies')
        )

        const getIndex = A.getIndexBy(this.products, (value) => value.price === 1000)
        const get = A.get(this.products, 3)

        return { result, getIndex, get }
    }

    // Exercice 9: Aplatir des listes imbriquées
    //Utilise Array.flat (pour aplatir la liste imbriquée de profondeur 1).
    //Utilise Array.deepFlat (pour aplatir la liste imbriquée de profondeur variable)
    public ArrayFn9 = () => {
        const flat = A.flat(this.products)
        const deep = A.deepFlat(this.products)
        return { flat, deep }
    }

    // // Exercice 10: Insérer des produits à des positions spécifiques.
    // Utilise Array.insertAt (pour insérer un produit à l'indice 1).
    // Utilise Array.prependToAll (pour ajouter un produit à chaque élément d'une liste).
    // Utilise Array.append (pour ajouter un produit à la fin de la liste)
    public ArrayFn10 = () => {
        const insert = A.insertAt(this.products, 1, { name: "Monitor", price: 20, inStock: true })
        const prepend = A.prependToAll(this.products, { name: "Monitor", price: 20, inStock: true })
        const append = A.append(this.products, { name: "Monitor", price: 20, inStock: true })
        return { insert, prepend, append }
    }

    // Exercice 11: 
    // extraire une sous liste de l'index 1 à 3
    // prendre les 2 premiers éléments
    // prendre des éléments tant que le prix est supérieur à 5
    // import { Product } from "./type";
    public ArrayFn11 = () => {
        const subList = A.slice(this.products, 1, 3)
        const take = A.take(this.products, 2)
        const takeWhile = A.takeWhile(this.products, (product) => product.price > 5)
        return { subList, take, takeWhile }
    }

    // Exercice 12:
    // grouper les produits par catéogire de prix: ceux entre 0 à 100 et ceux entre 100 à 1000
    public ArrayFn12 = () => {
        const group = A.groupBy(this.products, (product) => {
            if (product.price >= 0 && product.price <= 100) {
                return '0-100'
            } else {
                return '100-1000'
            }
        })
        return { group }
    }

    // Exercice 13:
    // // inverser l'ordre des produits
    // mélanger l'ordre des produits
    public ArrayFn13 = () => {
        const reverse = A.reverse(this.products)
        const shuffle = A.shuffle(this.products)
        return { reverse, shuffle }
    }

    // // Exercice 14: Retirer les doublons de la liste pour ceux ayant le même prix
    public ArrayFn14 = () => {
        const unique = A.uniqBy(this.products, (product) => product.price)
        return { unique }
    }

    // // Exercice 16: faire la somme de tous les prices des produits
    public ArrayFn16 = () => {
        return this.products.reduce((acc, product) => acc + product.price, 0)
    }

    // // Exercice 19: fussionner 2 tableaux en retirant les doublons
    public ArrayFn19 = () => {
        return A.union(this.products, this.newProducts)
    }

    // // Exercice 20: Créer une liste en répétant une valeur
    public ArrayFn20 = () => {
        return A.repeat(3, this.products[0])
    }

    //  Exercice 22 : groupe par catégorie, et calculer le price * quantity pour chaque catégorie
    public ArrayFn22 = () => {
        // Step 1: Group products by category
        const groupedByCategory = A.groupBy(this.productExtended, (product) => product.category);

        // Step 2: Calculate total value (price * quantity) for each category
        const totalByCategory = Object.entries(groupedByCategory).map(([category, products]) => {
            const totalValue = this.productExtended.reduce((acc, product) => acc + (product.price * product.quantity), 0);
            return { category, totalValue };
        });

        return totalByCategory;
    }

    //  Exercice 23: Générer un rapport des produits groupés par disponibilité et triés par prixObjectif : Tu veux créer un rapport des produits séparés en deux groupes : en stock et hors stock. Dans chaque groupe, les produits doivent être triés par prix croissant.
    public ArrayFn23 = () => {
        const groupedByStock = A.groupBy(this.products, (product) => product.inStock ? "inStock" : "outOfStock");

        const sortedInStock = A.sortBy(groupedByStock.inStock ?? [], (product) => product.price);
        const sortedOutOfStock = A.sortBy(groupedByStock.outOfStock ?? [], (product) => product.price);

        return {
            inStock: sortedInStock,
            outOfStock: sortedOutOfStock
        };
    }

    // Exercice 24: // écris une fonction calculateTotalPrice qui prend une liste et une fonction de filtre
    public ArrayFn24 = (products: Product[], filter: (product: Product) => boolean) => {
        return this.products.filter(filter).reduce((acc, product) => acc + product.price, 0);
    }

    // // Exercice 27: Créer un tableau de produits répondant à plusieurs critères définis par des fonctionsObjectif : Tu dois recevoir une série de fonctions comme argument qui définissent des critères de sélection. Ensuite, tu dois filtrer et retourner une nouvelle liste de produits qui satisfont tous les critères.Utilise Array.reduce (pour vérifier que chaque produit satisfait à toutes les fonctions de condition passées en argument, et les ajouter à une nouvelle liste).
    public ArrayFn27 = (conditions: Array<(product: Product) => boolean>) => {
        // Step 1: Use `reduce` to filter products based on all conditions
        return A.reduce(
            this.products,
            (acc: Product[], product: Product) => {
                // Check if product satisfies all conditions
                const satisfiesAllConditions = conditions.every((condition) => condition(product));

                // If it does, add it to the accumulator (filtered products list)
                if (satisfiesAllConditions) {
                    acc.push(product);
                }
                return acc;
            },
        );
    }

    // Exercice 28: fais une fonction qui prend un tableau de produits et une fonction de réduction et retourne le résultat de la réduction
    public ArrayFn28 = (products: Product[], reducer: (acc: number, product: Product) => number, initialValue: number) => {
        return products.reduce(reducer, initialValue);
    }

    // Exercice 30: Appliquer des réductions de prix en fonction de critères dynamiquesObjectif : Tu reçois une fonction qui définit le critère de réduction, ainsi qu'un pourcentage de réduction. Tu dois appliquer cette réduction aux produits qui répondent aux critères et calculer le total des prix après réduction.Utilise Array.reduce (pour vérifier si un produit satisfait aux critères de réduction, appliquer la réduction et accumuler le prix total).
    public ArrayFn30 = (products: Product[], criteria: (product: Product) => boolean, discount: number) => {
        // Step 1: Use `reduce` to apply discount to products based on criteria
        return products.reduce((acc, product) => {
            // Check if product satisfies criteria
            if (criteria(product)) {
                // Apply discount
                const discountedPrice = product.price - (product.price * discount);
                return acc + discountedPrice;
            }
            return acc + product.price;
        }, 0);
    }








}