import getFuelFromMass, { getFuelFromMasses } from './getFuelFromMass';
import input from './input';

describe('getFuelFromMass()', () => {
  test('example inputs', () => {
    expect(getFuelFromMass(14)).toBe(2);
    expect(getFuelFromMass(1969)).toBe(966);
    expect(getFuelFromMass(100756)).toBe(50346);
  });
});

describe('getFuelFromMasses()', () => {
  test('puzzle input', () => {
    expect(getFuelFromMasses(...input)).toBe(5101069);
  });
});
