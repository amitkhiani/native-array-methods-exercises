function multiplyBy10 (array) {
 const newArray = array.map(x => x * 10);
 return newArray;
};

function shiftRight (array) {
 let lastElement = array.pop();
 array.unshift(lastElement);
 return array;
};

function onlyVowels (array) {
  const newArray = array.map(x => x.replace(/[^aeiou]/ig, ""));
  return newArray;
};

function doubleMatrix (array) {
  const newArray = array.map(x => x.map(y => y * 2));
  return newArray;
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};