import { Exercices } from "./src/exos";

const exos = new Exercices();

console.log("doubleValues : ", exos.doubleValues([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log("evenNumbers : ", exos.evenNumbers([1, 2, 3, 4, 5])); // [2, 4]
console.log("Sum :", exos.sum([1, 2, 3, 4, 5]));
console.log("sortDescending : ", exos.sortDescending([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log("Every", exos.AllPositive([5, 4, 3, 2, 1]));
console.log("HasNegativeValue", exos.hasNegative([5, 4, 3, 2, 1]));
console.log("Average", exos.average([5, 4, 3, 2, 1]));
console.log(
  "getEvenSquares",
  exos.getEvenSquares([5, 4, 3, 2, 1, 4, 6, 10, 12])
);
console.log("mapAndSort", exos.sortByLength(["ab", "abc", "d", "long", "sh"]));
console.log("isPrime for 4", exos.isPrime(4));
console.log("isPrime for 5", exos.isPrime(5));

const multiplier = exos.createMultiplier(10, 2);
console.log("multiplier", multiplier());
console.log("multiplier", multiplier());
