import { convertKorean, KOREAN_OPTIONS } from "./converts/korean.convert";

export const validateEmpty = (input: number | string): never | void => {
  if (input === "") {
    throw new Error("please check the input is empty string");
  }

  if (input === ",") {
    throw new Error("please check the input has only one character : comma");
  }
};

export function escapeRegExp(inputString: string): string {
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions
  return inputString.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export const validateInteger = (input: number | string): never | void => {
  if (typeof input === "number" && !Number.isInteger(input)) {
    throw new Error("please check the input is float");
  }

  if (
    typeof input === "string" &&
    !/^-?(1|2|3|4|5|6|7|8|9|0|,)+$/g.test(input)
  ) {
    throw new Error(
      "please check the input has characters except for -?(0|1|2|3|4|5|6|7|8|9|0|,)"
    );
  }
};

// type: "korean" | "english" | "digit" | "notation" | "refinement"
export const getNativeNumber = (input: number | string): never | number => {
  validateEmpty(input);
  validateInteger(input);
  return Number(`${input}`.replace(/,/g, "")) || 0;
};

export const getKoreanNumber = (
  input: number | string,
  option: KOREAN_OPTIONS
): never | string => {
  return convertKorean(getNativeNumber(input), option);
};
