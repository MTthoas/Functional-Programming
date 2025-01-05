import { Belt_Options } from "./belt_option";
import { Belt_Function } from "./belt_function";
import { Belt_Array, Product } from "./belt_array";
import { Belt_Closure } from "./belt_closure";
import { Belt_Dict } from "./belt_dict";
import { Belt_Result } from "./belt_result";

const BeltArray = new Belt_Array();
const ClosureInstance = new Belt_Closure();
const BeltDict = new Belt_Dict();
const BeltFunctions = new Belt_Function();
const BeltOptions = new Belt_Options();
const BeltResult = new Belt_Result();

const products = [
    { name: "oranges", price: 500, inStock: true },
    { name: "bananas", price: 0, inStock: false },
    { name: "apples", price: 50, inStock: true },
    { name: "pears", price: 0, inStock: false },
    { name: "babies", price: 30, inStock: true },
];

const products2 = [
    { name: "chili", price: 100, inStock: true },
    { name: "tomato", price: 0, inStock: false },
];

async function runTasks() {
    // Options exos
    console.log("optionFn1", BeltOptions.optionFn1());
    console.log("optionFn2", BeltOptions.optionFn2([20, 10, 60]));
    console.log("optionFn3", BeltOptions.optionFn3());
    console.log("optionFn4", BeltOptions.optionFn4());
    console.log("optionFn5", BeltOptions.optionFn5()); // `await` nécessaire ici
    console.log("optionFn6", await BeltOptions.optionFn6());
    console.log("optionFn7", BeltOptions.optionFn7());
    console.log("optionFn10", BeltOptions.optionFn10());

    // Functions exos
    console.log("\nfunctionFn1", BeltFunctions.functionFn1());
    console.log("functionFn2", BeltFunctions.functionFn2());
    console.log("functionFn3", BeltFunctions.functionFn3()()());
    console.log("functionFn4", BeltFunctions.functionFn4());
    console.log("functionFn7", BeltFunctions.functionFn7());


    // Array exos
    console.log("\nArrayFn1", BeltArray.ArrayFn1());
    console.log("ArrayFn2", BeltArray.ArrayFn2());
    console.log("ArrayFn3", BeltArray.ArrayFn3({ name: "Monitor", price: 20, inStock: true }));
    console.log("ArrayFn4", BeltArray.ArrayFn4(products, products2));
    console.log("ArrayFn5", BeltArray.ArrayFn5());
    console.log("ArrayFn6", BeltArray.ArrayFn6());
    console.log("ArrayFn7", BeltArray.ArrayFn7());
    console.log("ArrayFn8", BeltArray.ArrayFn8());
    console.log("ArrayFn9", BeltArray.ArrayFn9());
    console.log("ArrayFn10", BeltArray.ArrayFn10());
    console.log("ArrayFn11", BeltArray.ArrayFn11());
    console.log("ArrayFn12", BeltArray.ArrayFn12());
    console.log("ArrayFn13", BeltArray.ArrayFn13());
    console.log("ArrayFn14", BeltArray.ArrayFn14());
    console.log("ArrayFn16", BeltArray.ArrayFn16());
    console.log("ArrayFn19", BeltArray.ArrayFn19());
    console.log("ArrayFn20", BeltArray.ArrayFn20());
    console.log("ArrayFn22", BeltArray.ArrayFn22());
    console.log("ArrayFn23", BeltArray.ArrayFn23());

    const filterCondition = (product: Product) => product.inStock && product.price > 50;
    console.log("ArrayFn24", BeltArray.ArrayFn24([{ name: "Monitor", price: 20, inStock: true }, { name: "Monitor", price: 20, inStock: true }], filterCondition));

    const conditions = [
        (product: Product) => product.price > 50, // Condition 1: Price greater than 50
        (product: Product) => product.inStock,    // Condition 2: Product is in stock
    ];

    console.log("ArrayFn27", BeltArray.ArrayFn27(conditions));
    const reducer = (acc: number, product: Product) => acc + product.price;
    console.log("ArrayFn28", BeltArray.ArrayFn28([{ name: "Monitor", price: 20, inStock: true }, { name: "Monitor", price: 20, inStock: true }], reducer, 0));
    const discountCriteria = (product: Product) => product.price > 50;
    console.log("ArrayFn30", BeltArray.ArrayFn30([{ name: "Monitor", price: 20, inStock: true }, { name: "Monitor", price: 20, inStock: true }], discountCriteria, 10));

    // Closure exos
    const counter = ClosureInstance.createCounter();
    console.log("\nclosureEXO1-Fn1", counter());
    console.log("closureEXO1-Fn2", counter());
    const multiply = ClosureInstance.createMultiplier(2);
    console.log("closureEXO2-Fn3", multiply(3));
    console.log("closureEXO2-Fn4", multiply(4));
    console.log("closureEXO2-Fn5", multiply(5));
    const applyOperation = ClosureInstance.applyOperation((a, b) => a + b);
    console.log("closureEXO3-Fn6", applyOperation(2, 3));
    console.log("closureEXO3-Fn7", applyOperation(4, 5));
    const slowFunction = (n: number) => {
        console.log("Slow function called with", n);
        return n * 2;
    };
    const memoizedFunction = ClosureInstance.memoize(slowFunction);
    console.log("closureEXO4-Fn8", memoizedFunction(2));
    console.log("closureEXO4-Fn9", memoizedFunction(2));
    console.log("closureEXO4-Fn10", memoizedFunction(3));


    // Dict exos
    console.log("\ndictEXO1-Fn1", BeltDict.DictFn1());
    console.log("dictEXO3-Fn3", BeltDict.DictFn3());
    console.log("dictEXO4-Fn4", BeltDict.DictFn4());
    console.log("dictEXO6-Fn6", BeltDict.DictFn6());
    console.log("dictEXO7-Fn7", BeltDict.DictFn7());
    console.log("dictEXO8-Fn8", BeltDict.DictFn8());
    console.log("dictEXO10-Fn10", BeltDict.DictFn10());
    console.log("dictEXO12-Fn12", BeltDict.DictFn12());
    console.log("dictEXO14-Fn14", BeltDict.DictFn14());
    console.log("dictEXO15-Fn15", BeltDict.DictFn15());


    // Result exos
    console.log("\nresultFn1", BeltResult.ResultFn1());
    console.log("resultFn2", BeltResult.ResultFn2());
    console.log("resultFn4", BeltResult.ResultFn4());
    console.log("resultFn5", BeltResult.resultFn5());

}

// Appeler la fonction asynchrone
runTasks();
