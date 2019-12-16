import isPassword, { getPasswordCount } from "./isPassword";

describe("isPassword()", () => {
  test("examples", () => {
    expect(isPassword(112233)).toBe(true);
    expect(isPassword(123444)).toBe(false);
    expect(isPassword(111122)).toBe(true);
  });

  test("solution", () => {
    expect(getPasswordCount(271973, 785961)).toBe(607);
  });
});
