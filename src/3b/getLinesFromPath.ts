import { Line } from "./types";

export default function getLinesFromPath(paths: string[]): Line[] {
  return paths.reduce(reduceLinesFromPath, []);
}

function reduceLinesFromPath(lines: Line[], path: string): Line[] {
  const [startRow, startColumn] = lines.length
    ? lines[lines.length - 1][1]
    : [0, 0];
  const direction = path[0];
  const delta = parseInt(path.slice(1), 10);

  let endRow = startRow;
  let endColumn = startColumn;

  switch (direction) {
    case "U":
      endRow -= delta;
      break;
    case "R":
      endColumn += delta;
      break;
    case "D":
      endRow += delta;
      break;
    case "L":
      endColumn -= delta;
      break;
    default:
  }

  return [
    ...lines,
    [
      [startRow, startColumn],
      [endRow, endColumn]
    ]
  ];
}
