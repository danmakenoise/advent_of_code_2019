export default function compute(
  memory: number[],
  input: () => number,
  output: (num: number) => void
) {
  const program = [...memory];
  let i = 0;

  while (true) {
    let numParams = 4;
    const opCode = program[i] % 100;

    if (opCode === 1) {
      const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
      const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
      const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
      program[outputPosition] = x + y;
    }

    if (opCode === 2) {
      const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
      const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
      const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
      program[outputPosition] = x * y;
    }

    if (opCode === 3) {
      numParams = 2;
      const [writePosition] = program.slice(i + 1);
      const inputValue = input();
      program[writePosition] = inputValue;
    }

    if (opCode === 4) {
      numParams = 2;
      const [readPosition] = program.slice(i + 1);
      const value =
        program[i] % 1000 < 100 ? program[readPosition] : readPosition;
      output(value);
    }

    if (opCode === 99) {
      break;
    }

    i += numParams;
  }

  return program;
}
