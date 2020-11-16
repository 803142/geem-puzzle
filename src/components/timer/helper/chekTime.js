const checkTime = i => {
  if (Number.isNaN(i)) {
    return false;
  }

  if (i < 10) {
    return `0${i}`;
  }
  return i;
};

export default checkTime;
