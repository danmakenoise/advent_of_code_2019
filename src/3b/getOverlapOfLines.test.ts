import getOverlapOfLines from "./getOverlapOfLines";
import { Line } from "./types";

describe("getOverlapOfLines()", () => {
  test("returning null if lines never touch", () => {
    const lines: [Line, Line] = [
      [
        [0, 0],
        [0, 2]
      ],
      [
        [2, -5],
        [-2, -5]
      ]
    ];

    expect(getOverlapOfLines(lines)).toEqual(null);
  });

  test("returning overlap coordinates not at origin", () => {
    const lines: [Line, Line] = [
      [
        [0, 0],
        [0, 2]
      ],
      [
        [-1, 1],
        [1, 1]
      ]
    ];

    expect(getOverlapOfLines(lines)).toEqual([0, 1]);
  });

  test("returning overlap coordinates not at origin flopped", () => {
    const lines: [Line, Line] = [
      [
        [-1, 1],
        [1, 1]
      ],
      [
        [0, 0],
        [0, 2]
      ]
    ];

    expect(getOverlapOfLines(lines)).toEqual([0, 1]);
  });

  test("returning null when no overlap outside of origin", () => {
    const lines: [Line, Line] = [
      [
        [0, 0],
        [0, 2]
      ],
      [
        [0, 0],
        [2, 0]
      ]
    ];

    expect(getOverlapOfLines(lines)).toEqual(null);
  });
});
