export default function isPassword(num: number) {
  const digits = num
    .toString()
    .split("")
    .map(char => parseInt(char, 10));

  let hasRepeating = false;

  for (let i = 0; i < digits.length - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      hasRepeating = true;
    }

    if (digits[i] > digits[i + 1]) {
      return false;
    }
  }

  return hasRepeating;
}

export function getPasswordCount(start: number, end: number) {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum = isPassword(i) ? sum + 1 : sum;
  }

  return sum;
}
