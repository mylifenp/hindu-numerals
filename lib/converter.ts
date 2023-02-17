const hinduNumeralMap: ReadonlyMap<string, number> = new Map<string, number>([
  ["०", 0],
  ["१", 1],
  ["२", 2],
  ["३", 3],
  ["४", 4],
  ["५", 5],
  ["६", 6],
  ["७", 7],
  ["८", 8],
  ["९", 9],
]);

const arabicNumeralMap: ReadonlyMap<string, string> = new Map<string, string>([
  ["0", "०"],
  ["1", "१"],
  ["2", "२"],
  ["3", "३"],
  ["4", "४"],
  ["5", "५"],
  ["6", "६"],
  ["7", "७"],
  ["8", "८"],
  ["9", "९"],
]);

const convertToHinduOrLeave = (n: string) =>
  arabicNumeralMap.has(n) ? arabicNumeralMap.get(n) : n;

const convertToArabicOrLeave = (n: string) =>
  hinduNumeralMap.has(n) ? hinduNumeralMap.get(n) : n;

export const toHinduNumerals = (num: string | number): string => {
  if (typeof num === "number") {
    return num
      .toString()
      .split("")
      .map((n) => convertToHinduOrLeave(n))
      .join("");
  } else {
    return num
      .split("")
      .map((n) => convertToHinduOrLeave(n))
      .join("");
  }
};

export const toArabicNumerals = (num: string): string | number => {
  const converted = num
    .split("")
    .map((n) => convertToArabicOrLeave(n))
    .join("");
  const to_num = parseInt(converted, 10);
  if (isNaN(to_num)) {
    return converted;
  }
  return to_num;
};
