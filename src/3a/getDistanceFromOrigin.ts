import { Coordinate } from "./types";

export default function getDistanceFromOrigin(coordinate: Coordinate) {
  return Math.abs(coordinate[0]) + Math.abs(coordinate[1]);
}
