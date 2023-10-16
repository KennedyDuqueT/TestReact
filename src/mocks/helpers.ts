export const delay = (delayTimeInMs: number) => new Promise((resolve) => setTimeout(resolve, delayTimeInMs));

export const getRandomInRange = (min: number, max: number): number => {
  return Math.round(Math.random() * Math.abs(max - min) + min);
};
