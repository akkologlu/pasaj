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
  console.log("totalMilliseconds", totalMilliseconds);
  const totalMinutes = Math.floor(totalMilliseconds / 60000);
  console.log("totalMinutes", totalMinutes);
  const days = Math.floor(totalMinutes / (60 * 24));
  console.log("days", days);
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  console.log("hours", hours);
  const minutes = totalMinutes % 60;
  console.log("minutes", minutes);

  return { days, hours, minutes };
};
