export default function compute(program: number[]) {
  let i = 0;

  while (true) {
    const opCode = program[i];

    if (opCode === 1) {
      const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
      const x = program[xPosition];
      const y = program[yPosition];
      program[outputPosition] = x + y;
    }

    if (opCode === 2) {
      const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
      const x = program[xPosition];
      const y = program[yPosition];
      program[outputPosition] = x * y;
    }

    if (opCode === 99) {
      break;
    }

    i += 4;
  }

  return program;
}
