export default function compute(
  memory: number[],
  input: () => number = () => 0,
  output: (num: number) => void = () => {
    return;
  }
) {
  const program = [...memory];
  let i = 0;

  while (true) {
    let numParams;
    const opCode = program[i] % 100;

    switch (opCode) {
      case 1: {
        numParams = 4;
        const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
        const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
        const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
        program[outputPosition] = x + y;
        break;
      }
      case 2: {
        numParams = 4;
        const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
        const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
        const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
        program[outputPosition] = x * y;
        break;
      }
      case 3: {
        numParams = 2;
        const [writePosition] = program.slice(i + 1);
        const inputValue = input();
        program[writePosition] = inputValue;
        break;
      }
      case 4: {
        numParams = 2;
        const [readPosition] = program.slice(i + 1);
        const value =
          program[i] % 1000 < 100 ? program[readPosition] : readPosition;
        output(value);
        break;
      }
      case 5: {
        numParams = 3;
        const [readPosition, jumpPosition] = program.slice(i + 1);
        const value =
          program[i] % 1000 < 100 ? program[readPosition] : readPosition;
        const destination =
          program[i] % 10000 < 1000 ? program[jumpPosition] : jumpPosition;

        if (value) {
          numParams = 0;
          i = destination;
        }

        break;
      }
      case 6: {
        numParams = 3;
        const [readPosition, jumpPosition] = program.slice(i + 1);
        const value =
          program[i] % 1000 < 100 ? program[readPosition] : readPosition;
        const destination =
          program[i] % 10000 < 1000 ? program[jumpPosition] : jumpPosition;

        if (!value) {
          numParams = 0;
          i = destination;
        }

        break;
      }
      case 7: {
        numParams = 4;
        const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
        const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
        const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
        program[outputPosition] = x < y ? 1 : 0;
        break;
      }
      case 8: {
        numParams = 4;
        const [xPosition, yPosition, outputPosition] = program.slice(i + 1);
        const x = program[i] % 1000 < 100 ? program[xPosition] : xPosition;
        const y = program[i] % 10000 < 1000 ? program[yPosition] : yPosition;
        program[outputPosition] = x === y ? 1 : 0;
        break;
      }
      case 99:
        break;
      default:
        throw new Error(`INVALID OPCODE: ${program[i]} at position ${i}`);
    }

    if (opCode === 99) {
      break;
    }

    i += numParams;
  }

  return program;
}
