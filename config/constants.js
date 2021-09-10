export const constants = {
  banWordTimeout: 300, //seconds for timeout username
  extraCharCnt: 20,
};

export const banWords = [];

export const equalChars = [
  ["а", "a", "@"],
  ["в", "b"],
  ["е", "e", "з", "3", "ё", "э"],
  ["и", "i", "u", "l", `\\|`, "й", "1"],
  ["к", "k"],
  ["м", "m"],
  ["н", "h"],
  ["о", "o", "0"],
  ["п", "n"],
  ["р", "p"],
  ["с", "c"],
  ["т", "t", "m"],
  ["у", "y"],
  ["х", "x"],
  ["ч", "ch", "4"],
  ["ь", "b"],
  ["ы", "bl", `b\\|`, "bi", "b1", "ьl", `ь\\|`, "ьi", "ь1"],
  ["s", "$"],
];
