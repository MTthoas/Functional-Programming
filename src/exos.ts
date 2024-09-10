import { isBelow0, isNegativeValue } from "./utils";

export class Exercices {
  constructor() {}

  public doubleValues = (arr: number[]): number[] => {
    return arr.map((num) => num * 2);
  };

  public sum = (arr: number[]): number => {
    return arr.reduce((acc, index) => acc + index, 0);
  };

  public evenNumbers = (arr: number[]): number[] => {
    return arr.filter((num: number) => num % 2 === 0);
  };

  public sortDescending = (arr: number[]): number[] => {
    return arr.sort((a, b) => b - a);
  };

  public AllPositive = (arr: number[]): boolean => {
    return arr.every(isBelow0);
  };

  public hasNegative = (arr: number[]): boolean => {
    return arr.some(isNegativeValue);
  };

  public average = (arr: number[]): number =>
    arr
      // Verify if value is not undefined
      .map((x) => x / arr.length)
      .reduce((acc, curr, _, array) => acc + curr, 0);
  // .map((x) => x)
  // .reduce(acc, curr _, arr) => acc + curr / arr.length, 0);

  public getEvenSquares = (arr: number[]): number[] =>
    arr
      .filter((num: number) => num % 2 === 0)
      .map((value: number) => value * value);

  public sortByLength = (arr: string[]): string[] =>
    arr.map((value: string) => value).sort((a, b) => a.length - b.length);

  public createMultiplier = (theState: number, multiplicator: number) => {
    let aState = theState;
    return () => aState * multiplicator;
  };

  public isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1 ? true : false;
  };
}
