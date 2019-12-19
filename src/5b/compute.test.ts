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

  test("opcode 5 - jump if true", () => {
    expect(compute([5, 3, 4, 1, 5, 99])).toEqual([5, 3, 4, 1, 5, 99]);
    expect(compute([5, 4, 4, 99, 0, 42])).toEqual([5, 4, 4, 99, 0, 42]);
    expect(compute([1105, 1, 5, 0, 0, 99])).toEqual([1105, 1, 5, 0, 0, 99]);
    expect(compute([1105, 0, 5, 99, 0, 0])).toEqual([1105, 0, 5, 99, 0, 0]);
  });

  test("opcode 6 - jump if false", () => {
    expect(compute([6, 3, 4, 0, 5, 99])).toEqual([6, 3, 4, 0, 5, 99]);
    expect(compute([6, 4, 4, 99, 1, 42])).toEqual([6, 4, 4, 99, 1, 42]);
    expect(compute([1106, 0, 5, 0, 0, 99])).toEqual([1106, 0, 5, 0, 0, 99]);
    expect(compute([1106, 1, 5, 99, 0, 0])).toEqual([1106, 1, 5, 99, 0, 0]);
  });

  test("opcode 7 - less than", () => {
    expect(compute([7, 5, 6, 7, 99, 0, 1, 42])).toEqual([
      7,
      5,
      6,
      7,
      99,
      0,
      1,
      1
    ]);

    expect(compute([7, 5, 6, 7, 99, 1, 0, 42])).toEqual([
      7,
      5,
      6,
      7,
      99,
      1,
      0,
      0
    ]);
  });

  test("opcode 8 - equals", () => {
    expect(compute([8, 5, 6, 7, 99, 0, 1, 42])).toEqual([
      8,
      5,
      6,
      7,
      99,
      0,
      1,
      0
    ]);

    expect(compute([8, 5, 6, 7, 99, 1, 1, 42])).toEqual([
      8,
      5,
      6,
      7,
      99,
      1,
      1,
      1
    ]);
  });

  test("i/o example", () => {
    const input = jest.fn(() => 99);
    const output = jest.fn();

    expect(compute([3, 1, 4, 1, 99], input, output)).toEqual([3, 99, 4, 1, 99]);
    expect(output).toHaveBeenCalledTimes(1);
    expect(output).toHaveBeenCalledWith(99);

    output.mockClear();
    compute([3, 3, 1107, -1, 8, 3, 4, 3, 99], input, output);
    expect(output).toHaveBeenCalledWith(0);
  });

  test("solution example", () => {
    const input = jest.fn(() => 5);
    const output = jest.fn();

    compute(testInput, input, output);

    const outputNumbers = output.mock.calls.map(call => call[0]);
    expect(outputNumbers).toEqual([15486302]);
  });
});
