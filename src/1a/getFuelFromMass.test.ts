import getFuelFromMass, { getFuelFromMasses } from './getFuelFromMass';
import input from './input';

describe('getFuelFromMass()', () => {
  test('example inputs', () => {
    expect(getFuelFromMass(12)).toBe(2);
    expect(getFuelFromMass(14)).toBe(2);
    expect(getFuelFromMass(1969)).toBe(654);
    expect(getFuelFromMass(100756)).toBe(33583);
  });
});

describe('getFuelFromMasses()', () => {
  test('example inputs', () => {
    expect(getFuelFromMasses(12, 14, 1969)).toBe(658);
  });

  test('puzzle input', () => {
    expect(getFuelFromMasses(...input)).toBe(3402634);
  });
});
