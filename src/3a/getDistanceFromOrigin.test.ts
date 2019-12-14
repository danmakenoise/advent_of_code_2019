import getDistanceFromOrigin from "./getDistanceFromOrigin";

describe("getDistanceFromOrigin()", () => {
  test("sample distances", () => {
    expect(getDistanceFromOrigin([0, 0])).toBe(0);
    expect(getDistanceFromOrigin([0, 1])).toBe(1);
    expect(getDistanceFromOrigin([1, 1])).toBe(2);
  });
});
