export const getNumberWithComma = (
  stringNumber: string,
  chunkSize: 3 | 4
): string => {
  if (stringNumber.length <= chunkSize) {
    return stringNumber;
  } else {
    return stringNumber.replace(
      new RegExp(`\\B(?=(\\d{${chunkSize}})+(?!\\d))`, "g"),
      ","
    );
  }
};

export const getNumberChunks = (
  stringNumber: string,
  chunkSize: 3 | 4
): string[] => {
  return getNumberWithComma(stringNumber, chunkSize).split(",");
};

export const getAbsoluteNumber = (
  nativeNumber: number
): { absoluteNumber: number; isNegative: boolean } => {
  return {
    absoluteNumber: Math.abs(nativeNumber),
    isNegative: nativeNumber < 0,
  };
};
