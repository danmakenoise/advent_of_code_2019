import { Coordinate, Line } from "./types";

export default function getOverlapOfLines(
  lines: [Line, Line]
): Coordinate | null {
  const [lineA, lineB] = lines;

  const [startA, endA] = lineA;
  const [startB, endB] = lineB;

  const [startRowA, startColumnA] = startA;
  const [endRowA, endColumnA] = endA;
  const [startRowB, startColumnB] = startB;
  const [endRowB, endColumnB] = endB;

  const isParallelLines =
    (startRowA === endRowA && startRowB === endRowB) ||
    (startColumnA === endColumnA && startColumnB === endColumnB);

  if (isParallelLines) {
    return null;
  }

  const overlap: Coordinate =
    startRowA === endRowA
      ? [startRowA, startColumnB]
      : [startRowB, startColumnA];

  if (overlap[0] === 0 && overlap[1] === 0) {
    return null;
  }

  const overlapRowInRangeOfA =
    overlap[0] <= Math.max(startRowA, endRowA) &&
    overlap[0] >= Math.min(startRowA, endRowA);
  const overlapRowInRangeOfB =
    overlap[0] <= Math.max(startRowB, endRowB) &&
    overlap[0] >= Math.min(startRowB, endRowB);
  const overlapColumnInRangeOfA =
    overlap[1] <= Math.max(startColumnA, endColumnA) &&
    overlap[1] >= Math.min(startColumnA, endColumnA);
  const overlapColumnInRangeOfB =
    overlap[1] <= Math.max(startColumnB, endColumnB) &&
    overlap[1] >= Math.min(startColumnB, endColumnB);
  const overlapInRange =
    overlapRowInRangeOfA &&
    overlapRowInRangeOfB &&
    overlapColumnInRangeOfA &&
    overlapColumnInRangeOfB;

  return overlapInRange ? overlap : null;
}
