import getDistanceToClosestIntersection from "./getDistanceToClosestIntersection";
import * as testInput from "./input";

describe("getDistanceToClosestIntersection()", () => {
  test("example input a", () => {
    const pathA = ["R8", "U5", "L5", "D3"];
    const pathB = ["U7", "R6", "D4", "L4"];
    expect(getDistanceToClosestIntersection(pathA, pathB)).toBe(6);
  });

  test("example input b", () => {
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

    expect(getDistanceToClosestIntersection(pathA, pathB)).toBe(159);
  });

  test("example input c", () => {
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

    expect(getDistanceToClosestIntersection(pathA, pathB)).toBe(135);
  });

  test("test input", () => {
    expect(
      getDistanceToClosestIntersection(testInput.pathA, testInput.pathB)
    ).toBe(2193);
  });
});
