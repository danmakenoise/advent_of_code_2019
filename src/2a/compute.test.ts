import compute from "./compute";
import input from './input';

describe("compute()", () => {
  test("example inputs", () => {
    expect(compute([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    expect(compute([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    expect(compute([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    expect(compute([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([
      30,
      1,
      1,
      4,
      2,
      5,
      6,
      0,
      99
    ]);
  });

  test("puzzle input", () => {
    const testInput = [...input];
    testInput[1] = 12;
    testInput[2] = 2;
    expect(compute(testInput)[0]).toBe(4930687);
  });
});
