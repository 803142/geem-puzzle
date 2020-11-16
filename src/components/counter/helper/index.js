const counterNormalaize = (score, size = 3) => {
  let result = Number(score) + 1;
  while (String(result).length < size) {
    result = `0${result}`;
  }
  return result;
};

export default counterNormalaize;
