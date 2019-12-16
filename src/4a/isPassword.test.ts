import isPassword, { getPasswordCount } from "./isPassword";

describe("isPassword()", () => {
  test("examples", () => {
    expect(isPassword(111111)).toBe(true);
    expect(isPassword(23450)).toBe(false);
    expect(isPassword(123789)).toBe(false);
  });

  test("solution", () => {
    expect(getPasswordCount(271973, 785961)).toBe(925);
  });
});
