

export function dateToSeconds(year, month, day) {
  return new Date(year, month - 1, day).getTime();
}






