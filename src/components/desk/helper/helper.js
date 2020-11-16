const lookNabor = classNameNabore => {
  if (document.querySelector(`.${classNameNabore}`)) {
    return document.querySelector(`.${classNameNabore}`).className.match('hidden');
  }
  return false;
};

const canMoove = (x, y, size) => {
  const classNameTileUp = `place-${x}${y - 1}`;
  const classNameTileRight = `place-${x + 1}${y}`;
  const classNameTileDown = `place-${x}${y + 1}`;
  const classNameTileLeft = `place-${x - 1}${y}`;
  if (lookNabor(classNameTileUp) && y > 0) {
    return classNameTileUp;
  }
  if (lookNabor(classNameTileRight) && x < size - 1) {
    return classNameTileRight;
  }
  if (lookNabor(classNameTileDown) && y < size - 1) {
    return classNameTileDown;
  }
  if (lookNabor(classNameTileLeft) && x > 0) {
    return classNameTileLeft;
  }
  return false;
};

const ifCanMoove = (imageClass, tileClass, size) => {
  // const [wrightePositionX, wrightPositionY] = imageClass.split('-')[1].split('');
  if (!!tileClass && tileClass !== 'hidden' && tileClass.match('place')) {
    const [currentPositionX, currentPositionY] = tileClass.split('-')[1].split('');
    const possibleMoove = canMoove(Number(currentPositionX), Number(currentPositionY), size);
    if (possibleMoove) {
      return possibleMoove;
    }
  }
  return false;
};

const isWrightPosition = (
  wrightePositionX,
  wrightPositionY,
  currentPositionX,
  currentPositionY
) => {
  if (wrightePositionX === currentPositionX && wrightPositionY === currentPositionY) {
    return true;
  }
  return false;
};

const isResolveble = (arr, row, sizeDeck) => {
  const workArray = arr.map(el => {
    const [a, b] = el.split('-')[1].split('');
    return Number(a) * sizeDeck + Number(b);
  });
  const result = workArray.reduce(
    (sum, cur, index, array) => sum + array.slice(index).filter(current => cur > current).length,
    row
  );
  return !!(result % 2);
};

export { ifCanMoove, isWrightPosition, isResolveble };
