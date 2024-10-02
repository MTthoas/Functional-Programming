import { Belt_Options } from "./belt_option";
import { Belt_Function } from "./belt_function";
import { Belt_Array } from "./belt_array";
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

    // Functions exos
    console.log("functionFn1", BeltFunctions.functionFn1());
    console.log("functionFn2", BeltFunctions.functionFn2());
    console.log("functionFn3", BeltFunctions.functionFn3()()());
    console.log("functionFn7", BeltFunctions.functionFn7());

    // Array exos
    console.log("ArrayFn1", BeltArray.ArrayFn1());
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

    // Closure exos
    const counter = ClosureInstance.createCounter();
    console.log("closureFn1", counter());
    console.log("closureFn2", counter());

    const multiply = ClosureInstance.createMultiplier(2);
    console.log("closureFn3", multiply(3));
    console.log("closureFn4", multiply(4));
    console.log("closureFn5", multiply(5));

    const applyOperation = ClosureInstance.applyOperation((a, b) => a + b);
    console.log("closureFn6", applyOperation(2, 3));
    console.log("closureFn7", applyOperation(4, 5));

    // Dict exos
    console.log("dictFn1", BeltDict.DictFn1());
    console.log("dictFn3", BeltDict.DictFn3());
    console.log("dictFn4", BeltDict.DictFn4());
    console.log("dictFn6", BeltDict.DictFn6());
    console.log("dictFn7", BeltDict.DictFn7());
    console.log("dictFn8", BeltDict.DictFn8());

    // Result exos
    console.log("resultFn1", BeltResult.ResultFn1());
    console.log("resultFn2", BeltResult.ResultFn2());
    console.log("resultFn4", BeltResult.ResultFn4());

}

// Appeler la fonction asynchrone
runTasks();
