import { Exercices } from "../exos";

describe("Exercices", () => {
  let exercices: Exercices;

  beforeEach(() => {
    exercices = new Exercices();
  });

  it("should double values", () => {
    expect(exercices.doubleValues([1, 2, 3, 4, 5])).toEqual([2, 4, 6, 8, 10]);
  });
});
