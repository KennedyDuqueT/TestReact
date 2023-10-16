export const currency = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return formatter.format(value); //$2,500.00
};

export const number = (value: number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(value); //2,500
};

export const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const addDaysToADate = (date: string, daysToAdd: number) => {
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const convertDate = new Date(date);
  const newDate = new Date(convertDate.getTime() + daysToAdd * millisecondsInADay);
  const formatNewDate = formatDate(new Date(newDate));
  return formatNewDate;
};
