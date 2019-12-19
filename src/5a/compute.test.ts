import compute from "./compute";
import testInput from "./input";

describe("computer()", () => {
  test("program examples", () => {
    const input = jest.fn(() => 1);
    const output = jest.fn();

    expect(compute([1002, 4, 3, 4, 33], input, output)).toEqual([
      1002,
      4,
      3,
      4,
      99
    ]);

    expect(compute([1, 5, 6, 4, 42, 33, 66], input, output)).toEqual([
      1,
      5,
      6,
      4,
      99,
      33,
      66
    ]);

    expect(compute([2, 5, 6, 4, 42, 33, 3], input, output)).toEqual([
      2,
      5,
      6,
      4,
      99,
      33,
      3
    ]);

    expect(compute([1101, 33, 66, 4, 42], input, output)).toEqual([
      1101,
      33,
      66,
      4,
      99
    ]);

    expect(compute([1102, 33, 3, 4, 42], input, output)).toEqual([
      1102,
      33,
      3,
      4,
      99
    ]);
  });

  test("i/o example", () => {
    const input = jest.fn(() => 99);
    const output = jest.fn();

    expect(compute([3, 1, 4, 1, 99], input, output)).toEqual([3, 99, 4, 1, 99]);
    expect(output).toHaveBeenCalledTimes(1);
    expect(output).toHaveBeenCalledWith(99);
  });

  test("solution example", () => {
    const input = jest.fn(() => 1);
    const output = jest.fn();

    compute(testInput, input, output);

    const outputNumbers = output.mock.calls.map(call => call[0]);
    expect(outputNumbers).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 12440243]);
  });
});
