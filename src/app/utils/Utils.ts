import numeral from "numeral";

export function getUniqueId(username: string) {
  return username + Date.now().toFixed().slice(-4);
}
export const formatNumberToReadable = (num: number): string => {
  if (num < 1000) {
    return numeral(num).format("0,0");
  }
  return numeral(num).format("0.0a");
};
