import { A, O, N, pipe } from "@mobily/ts-belt";

export class ExosBelt {
  private array: number[];
  constructor() {
    this.array = [20, 40, 60, 80];
  }

  public Pipe() {
    pipe(this.array, A.map(N.multiply(10)));
  }
}
