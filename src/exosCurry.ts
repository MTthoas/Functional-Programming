import { A, O, N, pipe } from "@mobily/ts-belt";

export class ExosCurry {
  constructor() {}

  public sum(a: number, b: number) {
    return a + b;
  }

  public Currying() {
    return (a: number) => (b: number) => this.sum(a, b);
  }
}
