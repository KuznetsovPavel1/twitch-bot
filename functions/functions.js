import moment from "moment";

import { banWords, constants, equalChars } from "../config/constants.js";
const { extraCharCnt } = constants;

export const momentDateTime = () => moment().format("DD.MM.YYYY HH:mm:ss");

export const isBan = (message) => {
  const regexStr = banWords.reduce((str = "", word) => {
    const wordMod = word.split("").reduce((subStr = "", char) => {
      const iterator = (char, i) => {
        if (i >= equalChars.length) {
          return char;
        } else if (equalChars[i].includes(char)) {
          return equalChars[i].reduce(
            (charNew = "", item) =>
              `${charNew.length > 0 ? `${charNew}|` : ""}${item}`
          );
        } else {
          return iterator(char, i + 1);
        }
      };

      return `${subStr}(${iterator(
        char,
        0
      )})+[^a-zA-Zа-яА-Я0-9]{0,${extraCharCnt}}`;
    }, "");

    return `${str.length > 0 ? `${str}|` : ""}${wordMod}`;
  }, "");

  const regexp = new RegExp(regexStr, "gi");

  const res = regexp.test(message);

  return regexStr.length > 0 ? res : false;
};
