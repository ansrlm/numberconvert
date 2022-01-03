export const convertOverflow = (
  numberBlock: string,
  chunkSize: 3 | 4
): { topNumberBlock: string; isOverflow: boolean } => {
  console.log("", numberBlock, chunkSize);
  return { topNumberBlock: "", isOverflow: true };
};
