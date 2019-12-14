import getLinesFromPath from "./getLinesFromPath";

describe("getLinesFromPath()", () => {
  test("converting path list to array of lines", () => {
    const path = ["U1", "R2", "D3", "L4"];

    const expected = [
      [
        [0, 0],
        [-1, 0]
      ],
      [
        [-1, 0],
        [-1, 2]
      ],
      [
        [-1, 2],
        [2, 2]
      ],
      [
        [2, 2],
        [2, -2]
      ]
    ];

    expect(getLinesFromPath(path)).toEqual(expected);
  });
});
