import getDistanceFromOrigin from "./getDistanceFromOrigin";
import getLinesFromPath from "./getLinesFromPath";
import getOverlapOfLines from "./getOverlapOfLines";
import { Coordinate, Line } from "./types";

export default function getDistanceToClosestIntersection(
  pathA: string[],
  pathB: string[]
) {
  const linesA = getLinesFromPath(pathA);
  const linesB = getLinesFromPath(pathB);

  const overlaps = linesA.reduce(reduceOverlapsWithLines(linesB), []);
  const distances = overlaps.map(getDistanceFromOrigin);
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
