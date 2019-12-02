export default function compute(memory: number[]) {
  const program = [...memory];
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

function computeNounVerb(program: number[], noun: number, verb: number) {
  const memory = [...program];
  memory[1] = noun;
  memory[2] = verb;
  return compute(memory)[0];
}

export function findNounVerbForNumber(program: number[], expected: number) {
  for (let noun = 0; noun < 99; noun++) {
    for (let verb = 0; verb < 99; verb++) {
      if (computeNounVerb(program, noun, verb) === expected) {
        return [noun, verb];
      }
    }
  }

  return [-1, -1];
}
