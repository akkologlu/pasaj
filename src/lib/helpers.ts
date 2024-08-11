export const convertDates = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("tr-TR", options);
};

export const formatTimeDifference = (
  targetDate: string
): {
  days: number;
  hours: number;
  minutes: number;
} => {
  const now = new Date();
  const target = new Date(targetDate);

  const totalMilliseconds = target.getTime() - now.getTime();
  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes };
};
