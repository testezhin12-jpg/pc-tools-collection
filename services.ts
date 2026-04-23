import { validateString, validateNumber } from './utils';

interface UserInput {
  name: string;
  age: number;
}

function processInput(input: UserInput) {
  // Validate input data
  if (!validateString(input.name)) {
    throw new Error('Invalid name');
  }
  if (!validateNumber(input.age)) {
    throw new Error('Invalid age');
  }

  // Main processing logic
  console.log(`Processing user: ${input.name}, Age: ${input.age}`);
}

export { processInput };