export function queryParser(location) {
  const tempArr = location.search.match(/[^\s\?&=]+/g);
  const tempObj = {};

  tempArr?.forEach((v, i) => (i % 2 === 0 ? (tempObj[v] = null) : (tempObj[tempArr[i - 1]] = v)));

  return tempObj;
}

export function priceSplit(price, separator) {
  const tempArr = [];
  let str = price + "";
  let length = str.length;
  let point = str.length - 3;

  while (length > 0) {
    // 뒤에서 3개 배열에 넣고
    tempArr.unshift(str.substring(point, length));
    // 뒤에서 3개 자른거 문자열 업데이트하고
    str = point > 0 ? str.slice(0, point) : "";
    length = str.length;
    point = str.length - 3;
  }

  // , 를 구분자로 사용해서 합치기
  return tempArr.join(separator);
}
