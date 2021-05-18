export function convertDurationToTimeString(duration: number) {
  const hours = Math.floor(duration / 3600) // Math.floor arredonda pra baixo
  const minutes = Math.floor((duration % 3600)) / 60;
  const seconds = duration % 60;

  const timeString = [hours, minutes.toFixed(2)]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  console.log(timeString);
  return timeString;
}




// , seconds.toFixed(2)