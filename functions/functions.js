import moment from "moment";

import { banWords } from "../config/constants.js";

export const momentDateTime = () => moment().format("DD.MM.YYYY HH:mm:ss");

export const isBan = (message) => {
  const regexStr = banWords.reduce((str = "", word) => {
    const wordMod = word
      .split("")
      .reduce((subStr = "", char) => `${subStr}${char}+[^a-zA-Zа-яА-Я]*`, "");

    return `${str.length > 0 ? `${str}|` : ""}${wordMod}`;
  }, "");

  const regexp = new RegExp(regexStr, "gi");

  return regexStr.length > 0 && regexp.test(message);
};
