import { A, O, N, pipe } from "@mobily/ts-belt";

export class ExosBelt {
  private array: number[];
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
}
