function onlyEven (array) {
  return array.filter(x => (x % 2 === 0));
};

function onlyOneWord (array) {
  return array.filter(x => x.split(' ').length === 1);
};

function positiveRowsOnly (array) {
  return array.filter(x => x.filter(y => y >= 0).length === 3);
};

function allSameVowels (array) {
  const newArray = array.filter(x => (/^(.)\1+$/.test(x.replace(/[^aeiou]/ig, ""))));
  return newArray;
};

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};