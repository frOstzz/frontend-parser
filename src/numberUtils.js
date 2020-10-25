export default function hoursToMilliseconds (hour) {
  return +(hour.toString() + '000') * 60 * 60;
}
