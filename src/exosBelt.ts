import { A, O, N, pipe } from "@mobily/ts-belt";

interface Props {
  value?: number;
}

// Merged Type, mapping the keys of two objects, if the key is present in both objects, the value of the key will be the value of the second object
// If K is present in A, the value of K will be the value of A[K]
type Merged<A extends Record<string, any>, B extends Record<string, any>> = {
  [K in keyof A | keyof B]: K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};

export class ExosBelt {
  private array: number[];
  //   private object: Props = { value: 2 };
  constructor() {
    this.array = [20, 40, 60, 80];
  }

  public Pipe = (): readonly number[] =>
    pipe(this.array, A.map(N.multiply(10)));

  public PipeTransform(): number {
    return pipe(
      this.array,
      A.filter((value) => value % 2 === 0),
      A.map((value) => value * 2),
      A.reduce(0, (acc, curr) => acc + curr)
    );
  }

  public generateArrayOfObjects(): readonly Props[] {
    // return pipe(
    //   this.array,
    //   A.map((_) => ({ value: Math.random() * 100 }))
    // );
    return A.map(this.array, (_) => ({ value: Math.random() * 100 }));
  }

  public processData(): number {
    return pipe(
      this.generateArrayOfObjects(),
      A.filterMap((obj) => O.fromNullable(obj.value)),
      A.filter((value) => value > 10),
      A.map(N.multiply(2)),
      A.reduce(0, (acc, curr) => acc + curr)
    );
  }

  public counter(): [() => number, (val: number) => void] {
    let count = 0;
    const increment = (val: number) => {
      count += val;
      return count;
    };
    const getValue = () => {
      return count;
    };
    return [getValue, increment];
  }

  public mergeObjects<
    A extends Record<string, any>,
    B extends Record<string, any>
  >(a: A, b: B): Merged<A, B> {
    return { ...a, ...b };
  }
}
