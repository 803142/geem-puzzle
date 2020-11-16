const apiMaker = adress => {
  const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }
    return Promise.reject(new Error(response.statusText));
  };

  const json = response => response.json();

  const data = async apiAdress => {
    const responce = await fetch(apiAdress);
    const answer = await status(responce);
    const result = await json(answer);
    return result;
  };

  return data(adress);
};

const shuffle = arr => {
  const result = [...arr];
  let j;
  let temp;
  for (let i = arr.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = result[j];
    result[j] = result[i];
    result[i] = temp;
  }
  return result;
};

const addStyle = style => {
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(style);
  document.adoptedStyleSheets = [sheet];
};

const simpleTag = (elementInfo = {}, dinamicData) => {
  const { tagName = 'div', classTag = 'block', content, advanced } = elementInfo;
  const tag = document.createElement(tagName);
  const advansedProperties = ([name, value]) => {
    tag.setAttribute(name, value);
  };

  tag.className = classTag;
  if (advanced) {
    Object.entries(advanced).forEach(advansedProperties);
  }
  if (content) {
    tag.innerHTML = content;
  }
  if (dinamicData) {
    tag.innerHTML = dinamicData;
  }
  return tag;
};

const importAll = r => {
  return r.keys().map(r);
};

const findTargetNode = (target, neededTarget, stopTrigger) => {
  let pointTarget = target;
  while (pointTarget.tagName !== neededTarget) {
    if (pointTarget.tagName === stopTrigger) {
      return false;
    }
    pointTarget = pointTarget.parentNode;
  }
  return pointTarget;
};

const qs = (selector, scope) => (scope || document).querySelector(selector);

export { simpleTag, apiMaker, importAll, findTargetNode, addStyle, shuffle, qs };
