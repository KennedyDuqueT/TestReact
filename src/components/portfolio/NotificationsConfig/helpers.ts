export const notificationsWithDaysOption: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const getDefaultValueForId = (value?: number): number | undefined => {
  return value && value > 0 ? value : undefined;
};
