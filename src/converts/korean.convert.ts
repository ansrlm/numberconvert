import {
  getNumberWithComma,
  getNumberChunks,
  getAbsoluteNumber,
} from "../utils/common.util";

// https://ko.wiktionary.org/wiki/%EB%B6%80%EB%A1%9D:%EC%98%81%EC%96%B4_%EC%88%98%EC%82%AC
const numerals = [
  ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"],
  ["", "십", "백", "천"],
  ["", "만", "억", "조"],
];

const KOREAN_OPTIONS = {
  NORMAL: "NORMAL",
  MIXED: "MIXED",
  SPACE: "SPACE",
  MIXED_COMMA: "MIXED_COMMA",
  MIXED_COMMA_SPACE: "MIXED_COMMA_SPACE",
  MIXED_SPACE: "MIXED_SPACE",
} as const;

export type KOREAN_OPTIONS = typeof KOREAN_OPTIONS[keyof typeof KOREAN_OPTIONS];

export const convertKorean = (
  nativeNumber: number,
  option: KOREAN_OPTIONS
): string => {
  const { absoluteNumber, isNegative } = getAbsoluteNumber(nativeNumber);
  const chunks = getNumberChunks(absoluteNumber.toString(), 4);
  const reverseChunks = chunks
    .reverse()
    .map((chunk) => chunk.split("").reverse());

  let koreanChunks: string[] = [];

  if (option.includes("MIXED")) {
    koreanChunks = reverseChunks
      .map((reverseChunk, index) => {
        reverseChunk.unshift(numerals[2][index]);
        reverseChunk.reverse();
        return option.includes("COMMA")
          ? getNumberWithComma(reverseChunk.join(""), 3)
          : reverseChunk.join("");
      })
      .reverse();
  } else {
    koreanChunks = reverseChunks
      .map((reverseChunk, index) => {
        const reverseKoreanChunk = reverseChunk.map((element, position) =>
          Number(element)
            ? `${numerals[0][Number(element)]}${numerals[1][position]}`
            : ""
        );
        reverseKoreanChunk.unshift(numerals[2][index]);
        return reverseKoreanChunk.reverse().join("");
      })
      .reverse();
  }

  isNegative && koreanChunks.unshift("-");

  return koreanChunks.join(option.includes("SPACE") ? " " : "");
};
