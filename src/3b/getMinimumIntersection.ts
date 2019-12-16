import getLinesFromPath from "./getLinesFromPath";
import getOverlapOfLines from "./getOverlapOfLines";
import { Coordinate, Line } from "./types";

export default function getMinimumIntersection(
  pathA: string[],
  pathB: string[]
) {
  const linesA = getLinesFromPath(pathA);
  const linesB = getLinesFromPath(pathB);

  const overlaps = linesA.reduce(reduceOverlapsWithLines(linesB), []);
  const distances = overlaps.reduce(getDistancesToOverlap(linesA, linesB), []);
  return Math.min(...distances);
}

function reduceOverlapsWithLines(linesOther: Line[]) {
  return function reduce(overlaps: Coordinate[], line: Line) {
    return [
      ...overlaps,
      ...linesOther.reduce(reduceOverlapsWithLine(line), [])
    ];
  };
}

function reduceOverlapsWithLine(lineOther: Line) {
  return function reduce(overlaps: Coordinate[], line: Line) {
    const overlap = getOverlapOfLines([line, lineOther]);

    if (overlap) {
      return [...overlaps, overlap];
    }

    return overlaps;
  };
}

function getDistancesToOverlap(linesA: Line[], linesB: Line[]) {
  return function reduce(distances: number[], overlap: Coordinate) {
    return [
      ...distances,
      getDistanceToOverlapForLine(linesA, overlap) +
        getDistanceToOverlapForLine(linesB, overlap)
    ];
  };
}

function getDistanceToOverlapForLine(lines: Line[], overlap: Coordinate) {
  let sum = 0;
  let line;

  for (line of lines) {
    const [currentStart, currentEnd] = line;
    const [currentStartRow, currentStartColumn] = currentStart;
    const [currentEndRow, currentEndColumn] = currentEnd;
    const [overlapRow, overlapColumn] = overlap;

    if (
      overlapRow >= Math.min(currentStartRow, currentEndRow) &&
      overlapRow <= Math.max(currentStartRow, currentEndRow) &&
      overlapColumn >= Math.min(currentStartColumn, currentEndColumn) &&
      overlapColumn <= Math.max(currentStartColumn, currentEndColumn)
    ) {
      sum +=
        Math.abs(currentStartRow - overlapRow) +
        Math.abs(currentStartColumn - overlapColumn);
      break;
    } else {
      sum +=
        Math.abs(currentStartRow - currentEndRow) +
        Math.abs(currentStartColumn - currentEndColumn);
    }
  }

  return sum;
}
