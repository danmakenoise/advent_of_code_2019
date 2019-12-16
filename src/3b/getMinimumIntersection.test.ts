import getMinimumIntersection from "./getMinimumIntersection";
import * as testInput from "./input";

describe("getMinimumIntersection()", () => {
  test("example a", () => {
    const pathA = [
      "R75",
      "D30",
      "R83",
      "U83",
      "L12",
      "D49",
      "R71",
      "U7",
      "L72"
    ];
    const pathB = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];

    expect(getMinimumIntersection(pathA, pathB)).toBe(610);
  });

  test("example b", () => {
    const pathA = [
      "R98",
      "U47",
      "R26",
      "D63",
      "R33",
      "U87",
      "L62",
      "D20",
      "R33",
      "U53",
      "R51"
    ];

    const pathB = [
      "U98",
      "R91",
      "D20",
      "R16",
      "D67",
      "R40",
      "U7",
      "R15",
      "U6",
      "R7"
    ];

    expect(getMinimumIntersection(pathA, pathB)).toBe(410);
  });

  test("test input", () => {
    expect(getMinimumIntersection(testInput.pathA, testInput.pathB)).toBe(
      63526
    );
  });
});
