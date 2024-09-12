export type CalculateFunction = () => number;

/**
 * Factory function that returns a function for generating a sequence of numbers
 *
 * @param {number} [start=0] - The starting number for the sequence. Default is 0.
 * @param {number} [step=1] - The step to increment each number in the sequence. Default is 1.
 * @returns {Function} - A function that generates the number sequence every time it is called.
 */
export const factory = (start: number = 0, step: number = 1): CalculateFunction => {
  let counter = start;

  return () => {
    counter += step;
    const currentCounter = counter;
    return currentCounter;
  };
};
