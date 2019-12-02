import { findNounVerbForNumber } from "./compute";
import input from "./input";

describe("findNounVerbForNumber()", () => {
  test("puzzle input", () => {
    expect(findNounVerbForNumber(input, 19690720)).toEqual([53, 35]);
  });
});
